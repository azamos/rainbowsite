export const picked_color = (color) => ({
    type: `PICKED_COLOR`,
    payload: color
});

export const triggered_rainbow = (id) => ({
    type: 'RAINBOW',
    payload: id
})

export const rgb_changed = (rgbIndex,value) => ({
    type: 'RGB',
    payload: {
        rgbIndex,
        value
    }
})