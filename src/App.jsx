import React, { useMemo, useState } from 'react';

const map = {
  a:'⠁',b:'⠃',c:'⠉',d:'⠙',e:'⠑',f:'⠋',g:'⠛',h:'⠓',i:'⠊',j:'⠚',
  k:'⠅',l:'⠇',m:'⠍',n:'⠝',o:'⠕',p:'⠏',q:'⠟',r:'⠗',s:'⠎',t:'⠞',
  u:'⠥',v:'⠧',w:'⠺',x:'⠭',y:'⠽',z:'⠵',
  á:'⠷',é:'⠮',í:'⠌',ó:'⠬',ú:'⠾',ü:'⠳',ñ:'⠻',
  ',':'⠂',';':'⠆',':':'⠒','.':'⠲','?':'⠦','!':'⠖','¿':'⠢','¡':'⠖',
  '-':'⠤','—':'⠤','(':'⠣',')':'⠜','“':'⠦','”':'⠴','"':'⠦',"'":'⠄','/':'⠌'
};

const digitMap = { '1':'a','2':'b','3':'c','4':'d','5':'e','6':'f','7':'g','8':'h','9':'i','0':'j' };

const dotPatterns = {
  '⠁':[1],'⠃':[1,2],'⠉':[1,4],'⠙':[1,4,5],'⠑':[1,5],'⠋':[1,2,4],
  '⠛':[1,2,4,5],'⠓':[1,2,5],'⠊':[2,4],'⠚':[2,4,5],
  '⠅':[1,3],'⠇':[1,2,3],'⠍':[1,3,4],'⠝':[1,3,4,5],'⠕':[1,3,5],
  '⠏':[1,2,3,4],'⠟':[1,2,3,4,5],'⠗':[1,2,3,5],'⠎':[2,3,4],'⠞':[2,3,4,5],
  '⠥':[1,3,6],'⠧':[1,2,3,6],'⠺':[2,4,5,6],'⠭':[1,3,4,6],
  '⠽':[1,3,4,5,6],'⠵':[1,3,5,6],
  '⠷':[1,2,3,5,6],'⠮':[2,3,4,6],'⠌':[3,4],'⠬':[3,4,6],
  '⠾':[2,3,4,5,6],'⠳':[1,2,5,6],'⠻':[1,2,4,5,6],
  '⠂':[2],'⠆':[2,3],'⠒':[2,5],'⠲':[2,5,6],'⠦':[2,3,6],
  '⠖':[2,3,5],'⠢':[2,6],'⠤':[3,6],'⠣':[1,2,6],'⠜':[3,4,5,6],
  '⠴':[3,5,6],'⠄':[3],'⠼':[3,4,5,6],'⠠':[6]
};

function convert(text) {
  const result = [];
  let numberMode = false;

  for (const raw of text) {
    const ch = raw.toLocaleLowerCase('es');

    if (/\\s/.test(raw)) {
      result.push({ source: raw, braille: ' ', type: 'space' });
      numberMode = false;
      continue;
    }

    if (/[0-9]/.test(raw)) {
      if (!numberMode) result.push({ source: 'Indicador numérico', braille: '⠼', type: 'indicator' });
      result.push({ source: raw, braille: map[digitMap[raw]], type: 'normal' });
      numberMode = true;
      continue;
    }

    numberMode = false;

    if (/[A-ZÁÉÍÓÚÜÑ]/.test(raw)) {
      result.push({ source: `Mayúscula ${raw}`, braille: '⠠', type: 'indicator' });
    }

    const braille = map[ch];
    result.push(braille
      ? { source: raw, braille, type: 'normal' }
      : { source: raw, braille: '⠿', type: 'unknown' });
  }

  return result;
}

function BrailleCard({ item }) {
  const activeDots = dotPatterns[item.braille] || [];

  if (item.type === 'space') {
    return <div className="space-card" aria-label="Espacio">espacio</div>;
  }

  return (
    <article className="cell-card">
      <div className="original" title={item.source}>{item.source}</div>
      <div className="braille-char" aria-label={`Braille ${item.braille}`}>{item.braille}</div>
      <div className="dots" aria-label={`Puntos activos: ${activeDots.join(', ') || 'ninguno'}`}>
        {Array.from({ length: 6 }, (_, index) => {
          const dot = index + 1;
          return <span key={dot} className={`dot ${activeDots.includes(dot) ? 'on' : ''}`} />;
        })}
      </div>
      <div className="code">
        {item.type === 'unknown' ? 'sin equivalencia' : activeDots.length ? `Puntos ${activeDots.join(', ')}` : 'indicador'}
      </div>
    </article>
  );
}

export default function App() {
  const [inputText, setInputText] = useState('');
  const [copyStatus, setCopyStatus] = useState('');

  const items = useMemo(() => convert(inputText), [inputText]);
  const brailleText = items.map(item => item.braille).join('');

  async function copyBraille() {
    if (!inputText) return;
    try {
      await navigator.clipboard.writeText(brailleText);
      setCopyStatus('¡Copiado!');
    } catch {
      setCopyStatus('No se pudo copiar');
    }
    window.setTimeout(() => setCopyStatus(''), 1600);
  }

  function clearText() {
    setInputText('');
    setCopyStatus('');
  }

  return (
    <main className="wrap">
      <header className="hero">
        <div className="eyebrow">Herramienta de escritura accesible</div>
        <h1>Texto a <span>Braille</span></h1>
        <p>Escribí un mensaje y mirá cómo se representa con puntos en relieve.</p>
      </header>

      <section className="panel">
        <div className="label-row">
          <label htmlFor="inputText">Tu texto</label>
          <span className="counter">{inputText.length} caracteres</span>
        </div>
        <textarea
          id="inputText"
          value={inputText}
          onChange={event => setInputText(event.target.value)}
          placeholder="Escribí aquí... Por ejemplo: Hola mundo 123"
        />
        <div className="actions">
          <button className="btn primary" onClick={() => setInputText(current => current)}>Convertir a Braille</button>
          <button className="btn secondary" onClick={copyBraille}> {copyStatus || 'Copiar Braille'} </button>
          <button className="btn secondary" onClick={clearText}>Limpiar</button>
        </div>
      </section>

      <section className="panel">
        <div className="section-head">
          <h2>Resultado en Braille</h2>
          <span className="hint">Caracteres Unicode Braille</span>
        </div>
        <div className="braille-output" aria-live="polite">
          {inputText ? (brailleText || 'El resultado aparecerá aquí…') : 'El resultado aparecerá aquí…'}
        </div>
        <p className="note">
          Los números se indican con el prefijo numérico ⠼. Las mayúsculas llevan el indicador ⠠.
          La conversión usa una tabla básica de Braille español; algunas convenciones editoriales pueden variar.
        </p>
      </section>

      <section className="panel">
        <div className="section-head">
          <h2>Vista de cada celda</h2>
          <span className="hint">Puntos 1–2–3 / 4–5–6</span>
        </div>
        <div className="visual-grid">
          {!inputText
            ? <div className="empty">Escribí algo arriba para ver las celdas.</div>
            : items.map((item, index) => <BrailleCard key={`${index}-${item.source}`} item={item} />)}
        </div>
      </section>

      <footer className="footer">Hecho para explorar el sistema Braille · 6 puntos por celda</footer>
    </main>
  );
}
