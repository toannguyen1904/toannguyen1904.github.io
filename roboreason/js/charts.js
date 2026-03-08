// ─────────────────────────────────────────────────────────────────────────────
// SUCCESS RATE DATA  (values are percentages 0–100)
// Replace each number with your real result. Order: task 1, task 2, task 3, …
// ─────────────────────────────────────────────────────────────────────────────

const data = {

  // Tasks: Tomato Sauce | Salad Dressing | Alphabet Soup
  'libero-object': {
    'ICRT':         [67.33, 66, 0, 44.44],
    'TO-Dropout':   [52.67, 96, 50, 62.22],
    'TO':           [37.33, 92, 34, 54.44],
    'Ours Dropout': [77.33, 97.33, 38, 70.89],
    'Ours':         [82.67, 92, 35.33, 70],
  },

  // Tasks: Black Bowl Top Drawer | Black Bowl on Cabinet (S1) | Black Bowl Bottom Drawer
  //        Black Bowl on Cabinet (S5) | White Bowl Right of Plate | Frying Pan on Cabinet
  'libero-kitchen': {
    'ICRT':         [0.0, 4.0, 0.0, 1.33, 0.0, 0.0, 0.89],
    'TO-Dropout':   [0.67, 20.67, 0.0, 0.0, 84.0, 0.0, 17.56],
    'TO':           [0.0, 33.33, 15.33, 0.0, 2.0, 22.0, 12.11],
    'Ours Dropout': [59.33, 82.67, 66.67, 79.33, 62.67, 10.67, 60.22],
    'Ours':         [1.33, 2.67, 24.67, 82.0, 8.0, 1.33, 20],
  },

  // Tasks: Cream Cheese in Basket | Tomato Sauce in Tray | Black Bowl in Tray
  //        Red Mug on Right Plate | Chocolate Pudding Right of Plate
  'libero-living': {
    'ICRT':         [27.33, 45.33, 21.33, 0.0, 0.67, 14.67],
    'TO-Dropout':   [0.0, 33.33, 50.0, 0.0, 0.0, 18.67],
    'TO':           [0.0, 30.0, 34.0, 0.0, 0.0, 13.20],
    'Ours Dropout': [4.0, 52.67, 62.67, 0.0, 75.33, 38.13],
    'Ours':         [0.0, 40.67, 4.67, 2.0, 8.67, 11.47],
  },

  // Tasks: Book in Front Compartment | Book in Back Compartment
  //        Book in Left Compartment  | Book on Cabinet Shelf
  'libero-study': {
    'ICRT':         [0.0, 2.67, 0.67, 0.0, 0.83],
    'TO-Dropout':   [2.0, 2.67, 84.0, 11.33, 25],
    'TO':           [0.67, 20.67, 82.0, 14.0, 29.33],
    'Ours Dropout': [3.33, 66.67, 70.67, 44.0, 46.17],
    'Ours':         [3.33, 24.67, 46.67, 54.0, 32.17],
  },

};

// ─────────────────────────────────────────────────────────────────────────────
// REAL-WORLD DATA  (values are percentages 0–100)
// Replace each number with your real result. Order: task 1, task 2, …, Average
// ─────────────────────────────────────────────────────────────────────────────

const realWorldData = {

  // Tasks: Dumpling→Red Box | Zebra→Blue Bowl | Tomato→Grey Bowl
  //        Monkey→Red Box  | Lion→Blue Bowl  | Potato→Grey Bowl | Average
  'pick-and-place': {
    'ICRT':         [15, 35, 30, 15, 25, 5, 22.50],
    'TO-Dropout':   [55, 50, 30, 5, 40, 10, 31.67],
    'TO':           [65, 45, 45, 55, 20, 15, 40.83],
    'Ours Dropout': [55, 55, 50, 45, 30, 45, 46.67],
    'Ours':         [65, 70, 65, 50, 45, 65, 60.00],
  },

  // Tasks: Hippo | Dumpling | Jaguar | Monkey | Lion | Potato | Average
  'poking': {
    'ICRT':         [20, 40, 80, 60, 40, 50, 48.33],
    'TO-Dropout':   [0.0, 60.0, 40.0, 40.0, 60.0, 20.0, 40.00],
    'TO':           [30.0, 60.0, 80.0, 30.0, 40.0, 70.0, 51.67],
    'Ours Dropout': [70, 60, 60, 60, 70, 70, 65.00],
    'Ours':         [60, 80, 80, 70, 70, 70, 71.67],
  },

};

const realWorldBenchmarks = [
  {
    id: 'pick-and-place',
    labels: ['Dumpling in Red Box', 'Zebra in Blue Bowl', 'Tomato in Grey Bowl', 'Monkey in Red Box', 'Lion in Blue Bowl', 'Potato in Grey Bowl', 'Average'],
  },
  {
    id: 'poking',
    labels: ['Hippo', 'Dumpling', 'Jaguar', 'Monkey', 'Lion', 'Potato', 'Average'],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Chart configuration — no need to edit below this line
// ─────────────────────────────────────────────────────────────────────────────

const MODELS = ['ICRT', 'TO-Dropout', 'TO', 'Ours Dropout', 'Ours'];

const COLORS = [
  { bg: 'rgba(59,130,246,0.75)',  border: '#3b82f6' },  // blue    — ICRT
  { bg: 'rgba(20,184,166,0.75)',  border: '#14b8a6' },  // teal    — TO-Dropout
  { bg: 'rgba(34,197,94,0.75)',   border: '#22c55e' },  // green   — TO
  { bg: 'rgba(249,115,22,0.75)',  border: '#f97316' },  // orange  — Ours Dropout
  { bg: 'rgba(236,72,153,0.75)',  border: '#ec4899' },  // magenta — Ours
];

const benchmarks = [
  {
    id: 'chart-libero-object',
    key: 'libero-object',
    labels: ['Tomato Sauce in Basket', 'Salad Dressing in Basket', 'Alphabet Soup in Basket', 'Average'],
  },
  {
    id: 'chart-libero-kitchen',
    key: 'libero-kitchen',
    labels: [
      'Black Bowl Top Drawer',
      'Black Bowl on Cabinet (S1)',
      'Black Bowl Bottom Drawer',
      'Black Bowl on Cabinet (S5)',
      'White Bowl Right of Plate',
      'Frying Pan on Cabinet',
      'Average',
    ],
  },
  {
    id: 'chart-libero-living',
    key: 'libero-living',
    labels: [
      'Cream Cheese in Basket',
      'Tomato Sauce in Tray',
      'Left Black Bowl in Tray',
      'Red Mug on Right Plate',
      'Chocolate Pudding Right of Plate',
      'Average',
    ],
  },
  {
    id: 'chart-libero-study',
    key: 'libero-study',
    labels: [
      'Book in Front Compartment',
      'Book in Back Compartment',
      'Book in Left Compartment',
      'Right Book on Cabinet Shelf',
      'Average',
    ],
  },
];

const baseOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        font: { family: 'Google Sans, Noto Sans, sans-serif', size: 12, weight: '600' },
        color: '#4a4a4a',
        padding: 14,
        boxWidth: 12,
        boxHeight: 12,
      },
    },
    tooltip: {
      callbacks: {
        label: ctx => ` ${ctx.dataset.label}: ${ctx.parsed.y}%`,
      },
    },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: {
        color: '#4a4a4a',
        font: { family: 'Noto Sans, sans-serif', size: 11 },
        maxRotation: 20,
      },
    },
    y: {
      min: 0,
      max: 100,
      title: {
        display: true,
        text: 'Success Rate (%)',
        font: { family: 'Google Sans, Noto Sans, sans-serif', size: 11, weight: '600' },
        color: '#4a4a4a',
      },
      ticks: {
        color: '#4a4a4a',
        font: { family: 'Noto Sans, sans-serif', size: 11 },
        callback: v => v + '%',
      },
      grid: { color: 'rgba(0,0,0,0.08)' },
    },
  },
};

function makeDatasets(bench) {
  return MODELS.map((model, i) => ({
    label: model,
    data: data[bench.key][model],
    backgroundColor: COLORS[i].bg,
    borderColor: COLORS[i].border,
    borderWidth: 1.5,
    borderRadius: 3,
  }));
}

const firstBench = benchmarks[0];
const ctx = document.getElementById('sim-chart').getContext('2d');
const simChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: firstBench.labels,
    datasets: makeDatasets(firstBench),
  },
  options: {
    ...baseOptions,
    animation: {
      duration: 500,
      easing: 'easeOutQuart',
      delay: ctx => ctx.dataIndex * 40,
    },
  },
});

document.getElementById('benchmark-select').addEventListener('change', function () {
  const bench = benchmarks.find(b => b.id === this.value);
  simChart.data.labels = bench.labels;
  simChart.data.datasets = makeDatasets(bench);
  simChart.update();
});

// ── Real-World chart ──────────────────────────────────────────────────────────

function makeRealWorldDatasets(bench) {
  return MODELS.map((model, i) => ({
    label: model,
    data: realWorldData[bench.id][model],
    backgroundColor: COLORS[i].bg,
    borderColor: COLORS[i].border,
    borderWidth: 1.5,
    borderRadius: 3,
  }));
}

const firstRW = realWorldBenchmarks[0];
const rwCtx = document.getElementById('realworld-chart').getContext('2d');
const rwChart = new Chart(rwCtx, {
  type: 'bar',
  data: {
    labels: firstRW.labels,
    datasets: makeRealWorldDatasets(firstRW),
  },
  options: {
    ...baseOptions,
    animation: {
      duration: 500,
      easing: 'easeOutQuart',
      delay: ctx => ctx.dataIndex * 40,
    },
  },
});

document.getElementById('realworld-select').addEventListener('change', function () {
  const bench = realWorldBenchmarks.find(b => b.id === this.value);
  rwChart.data.labels = bench.labels;
  rwChart.data.datasets = makeRealWorldDatasets(bench);
  rwChart.update();
});
