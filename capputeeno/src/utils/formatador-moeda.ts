export function formatarMoeda(valorEmCents: number): string {
    const valorEmReais = valorEmCents / 100;
    const valorFormatado = valorEmReais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return valorFormatado;
}