# Resource Management Context

## Historical Implementation Decision

The resource directory is currently stored as JSON files.

Originally, the plan was to migrate the resources to a database-backed
system that would support dynamic editing and CRUD operations.

The JSON implementation was intended as an **interim step**.

## Reconsideration of Database Approach

Subsequent discussion raised questions about whether a database-backed
system is warranted.

Factors influencing this reconsideration include:

- uncertain traffic and usage levels
- uncertain level of community contribution
- absence of technical editors who could maintain database-backed tools

## Current Operational Constraint

At present there is **no one available with sufficient technical
knowledge to maintain content using HTML, JSON, or database tools.**

This means that introducing a database system could create operational
risk unless editing workflows are carefully designed.

## Planning Implication

Future architectural decisions (for example introducing Supabase or
a CRUD interface) should depend on:

- demonstrated site traffic
- demonstrated contributor interest
- availability of maintainers capable of managing the system
