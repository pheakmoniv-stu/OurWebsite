
const ctx = document.getElementById('myLineChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line', // កំណត់ប្រភេទជា Line Chart
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], // ទិន្នន័យ X-axis
        datasets: [{
            label: 'Revenue ($)',
            data: [300, 520, 900, 1000, 420, 600, 520], // ទិន្នន័យ Y-axis
            borderColor: '#4db6acff', // ពណ៌បន្ទាត់ (ដូចក្នុងរូបភាព)
            tension: 0.4, // ធ្វើឱ្យបន្ទាត់កោង
            pointBackgroundColor: '#ff0606ff', // ពណ៌ចំណុច
            pointRadius: 4 // ទំហំចំណុច
        }]
        
    },
    
    options: {
        
        // កំណត់ Options ផ្សេងៗដូចជាចំណងជើង និងទ្រង់ទ្រាយអ័ក្ស (Axis)
        responsive: true,
        plugins: {
            
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                // ផ្នែកនេះជាកន្លែងដែលយើងបន្ថែមសញ្ញា $
                callback: function(value, index, ticks) {
                    // បន្ថែមសញ្ញា $ ទៅមុខតម្លៃនីមួយៗ
                    return '$' + value; 
                }
            }
                
            }
        }
        
    }
});