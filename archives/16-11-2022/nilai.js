const clearLastLine = () => {
    process.stdout.moveCursor(0, -1);
    process.stdout.clearLine(1);
}

const grades = [
    {
        key: "Bahasa Indonesia",
        value: undefined
    },
    {
        key: "Matematika",
        value: undefined
    },
    {
        key: "Bahasa Inggris",
        value: undefined
    },
    {
        key: "Ilmu Pengetahuan Alam",
        value: undefined
    }
];

for (let i = 0; i < grades.length; i++) {
    const grade = grades[i];
    const input = require("readline-sync").question(`Input nilai ${grade.key}: `);
    const parsed = Number(input);

    if (isNaN(parsed)) {
        clearLastLine();
        console.log("Input bukan number, silahkan coba lagi.")
        --i;
        continue;
    }

    if (parsed < 0) {
        clearLastLine();
        console.log("Nilai harus lebih dari 0. Silahkan coba lagi.");
        --i;
        continue;
    }

    if (parsed > 100) {
        clearLastLine();
        console.log("Nilai tidak bisa lebih dari 100. Silahkan coba lagi.");
        --i;
        continue;
    }

    grade.value = parsed;    
}

const avg = grades.map(x => x.value).reduce((a, b) => a + b, 0) / grades.length;
console.log(`========================================
Nilai rata-rata: ${avg.toFixed(2)}
${grades.map(x => {
    if (x.value >= 91 && x.value <= 100) {
        return `Nilai ${x.key}: Sangat baik`;
    } else if (x.value >= 81 && x.value <= 90) {
        return `Nilai ${x.key}: Baik`;
    } else if (x.value >= 71 && x.value <= 80) {
        return `Nilai ${x.key}: Cukup`;
    } else if (x.value < 71) {
        return `Niali ${x.key}: Kurang`
    }
}).join("\n")}
========================================`);