const fs = require('fs');
const cheerio = require('cheerio');

// Function to remove all SVG tags from an HTML file
function removeSVGTags(inputFile, outputFile) {
    // Read the input HTML file
    fs.readFile(inputFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        // Load the HTML into cheerio
        const $ = cheerio.load(data);

        // Remove all <svg> tags
        $('svg').remove();

        // Write the modified HTML to the output file
        fs.writeFile(outputFile, $.html(), (err) => {
            if (err) {
                console.error('Error writing file:', err);
                return;
            }
            console.log(`SVG tags removed and saved to ${outputFile}`);
        });
    });
}

// Replace 'input.html' and 'output.html' with your file names
arr = [
    {input:'/Users/saisumanthkammalshetty/Grad/personal_projects/leetcode_script/leetcode_companies/goldman_sach/3months.html',
     output:'/Users/saisumanthkammalshetty/Grad/personal_projects/leetcode_script/leetcode_companies/goldman_sach/3months_op.html'},
     {input:'/Users/saisumanthkammalshetty/Grad/personal_projects/leetcode_script/leetcode_companies/goldman_sach/6months.html',
     output:'/Users/saisumanthkammalshetty/Grad/personal_projects/leetcode_script/leetcode_companies/goldman_sach/6months_op.html'},
     {input:'/Users/saisumanthkammalshetty/Grad/personal_projects/leetcode_script/leetcode_companies/goldman_sach/30days.html',
     output:'/Users/saisumanthkammalshetty/Grad/personal_projects/leetcode_script/leetcode_companies/goldman_sach/30days.html'}
    ];

arr.forEach(element => {
    removeSVGTags(element.input, element.output);

});
