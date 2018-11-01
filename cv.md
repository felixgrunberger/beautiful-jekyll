---
layout:
title: "CV"
meta-title: "Felix Grünberger - CV"
output: github_document
runtime: shiny
---

```{r, echo=FALSE}
numericInput("rows", "How many cars?", 5)

renderTable({
  head(cars, input$rows)
})
```


