document.getElementById('send-btn').addEventListener('click', async () => {
    document.getElementById('send-btn').addEventListener('click', async () => {
        const userInput = document.getElementById('user-input').value;
        const responseDiv = document.getElementById('response');
    
        if (userInput.trim() === "") {
            responseDiv.innerHTML = "Please enter a question.";
            return;
        }
    
        responseDiv.innerHTML = "Thinking...";
    
        try {
            const response = await fetch('https://api.openai.com/v1/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer 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' // Replace with your actual API key
                },
                body: JSON.stringify({
                    model: "text-davinci-003",
                    prompt: userInput,
                    max_tokens: 150,
                })
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log('API Response:', data); // Debug log to see the response structure
    
            if (data.choices && data.choices.length > 0) {
                responseDiv.innerHTML = data.choices[0].text.trim();
            } else {
                responseDiv.innerHTML = "No response received from OpenAI.";
            }
        } catch (error) {
            console.error('Error:', error);
            responseDiv.innerHTML = `Error: ${error.message}`;
        }
    });
    