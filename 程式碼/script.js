document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const grade = parseInt(document.getElementById('grade').value);
    let resultText = '';
    let detailedEvaluation = '';

    if (grade >= 90) {
        resultText = '成績優異，A級！';
        detailedEvaluation = '這個成績顯示出學生非常優秀，具備了深厚的理解和掌握能力。繼續保持並挑戰更高級別的學習，積極參與更具挑戰性的課題。';
    } else if (grade >= 75) {
        resultText = '成績良好，B級！';
        detailedEvaluation = '學生的成績表現非常好，但在某些小部分可能存在些微的疏忽。需要進一步精進某些較為薄弱的領域，並加強對複雜概念的理解。';
    } else if (grade >= 60) {
        resultText = '成績及格，C級！';
        detailedEvaluation = '學生的表現達到了及格的標準，但有些概念仍不夠牢固。建議加強學習，特別是在那些薄弱的領域，並積極參與課外輔導或討論小組。';
    } else if (grade >= 50) {
        resultText = '成績勉強及格，D級！';
        detailedEvaluation = '學生的成績處於及格邊緣，需要更多的時間和努力來加強學習。強烈建議重新檢視學習內容，並向教師或同學請教，提升理解與應用能力。';
    } else {
        resultText = '成績不及格，F級。';
        detailedEvaluation = '這個成績表明學生未能充分理解課程內容，需要積極改進。建議從基礎開始重新學習，尋求額外的幫助，並設定可達成的小目標。';
    }

    document.getElementById('result').innerHTML = `
        <h3>${resultText}</h3>
        <p>${detailedEvaluation}</p>
    `;
    document.getElementById('result').style.display = 'block';
});

