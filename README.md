# treehacks-fake-news-detection
## Project Description
Use a machine learning model to detect fake news and categorize news articles into 4 categories: {'agree', 'disagree', 'unrelated', 'discuss'}

## Formal Definitions
**Input**

A headline and a body text - either from the same news article or from two different articles.

**Output**

Classify the stance of the body text relative to the claim made in the headline into one of four categories:
- Agrees: The body text agrees with the headline.
- Disagrees: The body text disagrees with the headline.
- Discusses: The body text discuss the same topic as the headline, but does not take a position
- Unrelated: The body text discusses a different topic than the headline

## Data
[Data Source](https://github.com/FakeNewsChallenge/fnc-1)

### Data Distribution
The distribution of `Stance` classes in `train_stances.csv` is as follows:

|   rows |   unrelated |   discuss |     agree |   disagree |
|-------:|------------:|----------:|----------:|-----------:|
|  49972 |    0.73131  |  0.17828  | 0.0736012 |  0.0168094 |

## Microsoft Azure Machine Learning Studio Experiment
![]('./img/experiment.png')

## Model Prediction Accuracy
Deep Neural Network: 86%
![]('./img/metrics.png')


## TODO
- [x] find a suitable ML library for price prediction - Azure Machine Learning Library
- [x] determine input features - (headline, body)
- [x] find data to train the model - found
- [x] build Azure experiment - done
- [x] analyze model prediction accuracy - done
- [ ] design backend API
- [ ] design chatbot interface (possible integration with Slack?)
- [ ] test

## Tech needed
- MS Azure ML library
  - knowledge based data analysis
  - speech recognition
  - internationalization (optional)
- MS Bot Framework
- Stdlib backend API
