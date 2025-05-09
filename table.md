| Model                            | Task       | F1-Score (Macro/Overall) | Avg. Latency (GPU, ms/inst) | Throughput (GPU, inst/sec) |
| :------------------------------- | :--------- | :----------------------- | :-------------------------- | :------------------------- |
| **Hybrid DistilBERT (Proposed)** | Sentiment  | **`[0.91]`**             | `[8.1]`                     | `[1150.7]`                 |
|                                  | Spam       | **`[0.98]`**             | `[8.1]`                     | `[1150.7]`                 |
| Single-Task DistilBERT           | Sentiment  | `[0.915]`                | `[7.9]`                     | `[1180.5]`                 |
| Single-Task DistilBERT           | Spam       | `[0.98]`                 | `[7.8]`                     | `[1195]`                   |
| BiLSTM + GloVe                   | Sentiment  | `[0.84]`                 | `[2.5]`                     | `[3500.1]`                 |
|                                  | Spam       | `[0.94]`                 | `[2.4]`                     | `[3650.8]`                 |
| SVM + TF-IDF                     | Sentiment  | `[0.81]`                 | `[0.5]`                     | `[>10000]`                 |
|                                  | Spam       | `[0.95]`                 | `[0.5]`                     | `[>10000]`                 |
