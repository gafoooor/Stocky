# Stocky - AI-Powered Stock Market Predictor

### Overview

Stocky is an interactive Chrome extension designed to predict stock values and provide buy/sell suggestions for any company using advanced machine learning and retrieval-augmented generation (RAG) models. With seamless integration of the OpenAI API and Selenium for web automation, Stocky empowers users with real-time financial insights directly from their browser.

### Features

- Real-Time Stock Prediction: Stocky analyzes stock market data and predicts the future value of any publicly traded company.
- Buy/Sell Suggestions: Based on the predicted stock value, Stocky provides actionable buy or sell recommendations, helping users make informed decisions.
- Google Search Integration: Users can highlight any company name during a Google search, and Stocky will instantly fetch and display its prediction along with a suggestion.
- RAG-Based Model: Stocky employs a Retrieval-Augmented Generation (RAG) model to enhance the accuracy of predictions by retrieving relevant external stock information before generating a response.
- Machine Learning Algorithms: Stocky uses machine learning models to analyze historical stock data and generate forecasts.
- Selenium Web Automation: Stocky employs Selenium to automate web interactions, such as gathering stock information from financial websites in real-time.
- OpenAI API Integration: Stocky leverages the power of OpenAI to deliver natural language predictions and explanations, ensuring the user experience is intuitive and efficient.

### Working

- Highlight Company Name: In any Google search, simply highlight the name of the company whose stock value you want to predict.
- Instant Prediction: Stocky retrieves relevant financial information using RAG, analyzes it along with historical stock data using machine learning models, and shows you a prediction of the stock value.
- Actionable Suggestion: Along with the prediction, Stocky provides a buy/sell recommendation, empowering you to make better financial decisions.

### Technologies Used

- Python: Core logic and data analysis.
- Machine Learning: Predictive algorithms for stock value forecasting.
- RAG (Retrieval-Augmented Generation): Retrieves external financial data to augment stock predictions.
- OpenAI API: For natural language generation and decision suggestions.
- Selenium: Automates web scraping and browser interactions.
- Chrome Extension: User-friendly interface, integrated directly into the browser.

### Usage

- Highlight any company name in a Google search.
- The Stocky bot will display the stock prediction, using a RAG model to provide enhanced accuracy, and a buy/sell suggestion based on the analyzed data.
