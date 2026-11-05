---
title: Nine percent
date: 2026-11-05
summary: What I learned measuring how often language models misread Pentagon contracts.
draft: true
---

<!-- DRAFT. Rewrite in your own voice before flipping draft to false. Everything in [brackets] is for you to fill in. -->

In the summer of 2025 I was an intern at SalesPatriot, a YC startup that helps defense suppliers bid on Pentagon contracts. A lot of that work runs through requests for quote, or RFQs: dense PDFs that say what the government wants, how many, and by when.

The product used language models to pull those details out. I wanted to know how often they got them wrong.

## The test

I took real RFQs from DIBBS, the Defense Logistics Agency's bidding system, and checked 112 values by hand: NSNs, quantities, delivery times, delivery addresses. Then I ran the same documents through GPT-4o-mini and Claude 3.5 Sonnet and compared every answer to my ground truth. Each run logged the model and the prompt so I could reproduce it.

[How did you decide what counted as a "critical" error?]

## The result

- GPT-4o-mini made critical errors on 9% of values.
- Claude 3.5 Sonnet made them on 5%.

[What did a typical mistake look like? One concrete example goes a long way.]

## Why 5% is still too high

[Your argument. Something like: a supplier bidding on dozens of RFQs a week will hit a wrong quantity or date on most of them. What would you want before trusting this in a real bid?]

## What we built next

That's why our prototype checks each claim against its source and puts a person in front of anything risky before a bid goes out.

[What would you do differently with more time?]
