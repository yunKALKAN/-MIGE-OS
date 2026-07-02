# MIGE OS API

MIGE OS Evidence Compilation API

## Installation

```bash
pip install -r requirements.txt
```

## Running

```bash
python api.py
```

API will be available at `http://localhost:8000`

## API Documentation

- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

## Endpoints

### Health Check
- `GET /health` — API health status

### Evidence Compilation
- `POST /api/v1/evidence/compile` — Compile raw data into evidence

### Registry
- `GET /api/v1/registry/handlers` — List available handlers
- `GET /api/v1/registry/blockchains` — List supported blockchains

## Example Usage

```bash
# Health check
curl http://localhost:8000/health

# Compile evidence
curl -X POST http://localhost:8000/api/v1/evidence/compile \
  -H "Content-Type: application/json" \
  -d '{
    "raw_data": {"tx": "abc123"},
    "handler_type": "SOLANA",
    "blockchain": "SOLANA",
    "source": "rpc"
  }'
```