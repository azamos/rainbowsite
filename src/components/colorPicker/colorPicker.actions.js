export const picked_color = (color) => ({
    type: `PICKED_COLOR`,
    payload: color
});

export const triggered_rainbow = (id) => ({
    type: 'RAINBOW',
    payload: id
})