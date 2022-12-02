const output = document.getElementById('output');
const textInput = document.getElementById('textInput');
const backInput = document.getElementById('backInput');
const foreInput = document.getElementById('foreInput');
const saveInput = document.getElementById('saveInput');

const cabio = (foreground, background) => {
    return `
    <g transform="scale(0.333 0.333) translate(600 600)">
        <g id="foreground" fill="${foreground}">
            <path d="M 95.945312 443.5 C 94.554688 442.167969 96.832031 434.222656 100.5 427.5 C 107.609375 414.609375 119.832031 400.609375 142.777344 379.167969 C 145.054688 377.054688 148.445312 373.945312 150.277344 372.222656 C 154.890625 367.945312 167.5 357.722656 171.390625 355.167969 C 172.609375 354.390625 175.390625 352.390625 177.5 350.832031 C 185.609375 344.722656 207.554688 329.722656 211.390625 327.554688 C 212.332031 327.054688 214.667969 325.609375 216.667969 324.390625 C 227.222656 317.722656 240.832031 309.945312 253.609375 303.332031 C 257.890625 301.109375 261.667969 299.109375 261.945312 298.890625 C 262.554688 298.390625 271 294 285 286.777344 C 306.277344 275.832031 314.777344 271.667969 340 259.609375 C 344.722656 257.332031 352.332031 253.609375 356.832031 251.332031 C 366.5 246.445312 370.167969 245 372.667969 245 C 374.332031 245 374.445312 245.109375 374.445312 246.890625 C 374.445312 248.609375 374.222656 248.890625 370.777344 250.609375 C 368.777344 251.667969 366.890625 252.832031 366.554688 253.167969 C 366.222656 253.554688 365.777344 253.890625 365.5 253.890625 C 365.222656 253.890625 364 254.5 362.777344 255.277344 C 361.554688 256.054688 360.332031 256.667969 360 256.667969 C 359.667969 256.667969 358.5 257.222656 357.332031 257.945312 C 356.222656 258.667969 353.054688 260.445312 350.277344 261.945312 C 347.554688 263.390625 343.277344 265.722656 340.832031 267.109375 C 338.445312 268.5 334.777344 270.445312 332.777344 271.5 C 330.777344 272.554688 328.554688 273.832031 327.777344 274.277344 C 327 274.722656 325.390625 275.667969 324.167969 276.390625 C 321.890625 277.722656 311.667969 283.054688 296.945312 290.554688 C 292.390625 292.945312 286.222656 296.167969 283.332031 297.777344 C 280.445312 299.390625 277.332031 301.054688 276.390625 301.445312 C 273.667969 302.777344 270.554688 304.390625 264.722656 307.667969 C 261.667969 309.332031 257.054688 311.890625 254.445312 313.332031 C 245.167969 318.445312 244.109375 319.054688 239.332031 322 C 236.667969 323.667969 234.332031 325 234.222656 325 C 234.054688 325 231.667969 326.5 228.890625 328.390625 C 226.054688 330.222656 223.390625 331.890625 222.890625 332.109375 C 222.332031 332.277344 218.945312 334.445312 215.222656 336.945312 C 211.5 339.445312 208.167969 341.609375 207.722656 341.832031 C 207.277344 342 204.777344 343.722656 202.167969 345.667969 C 199.5 347.609375 195.832031 350.277344 193.890625 351.667969 C 192 353.054688 188.667969 355.667969 186.554688 357.5 C 184.390625 359.332031 181.945312 361.332031 181.109375 361.945312 C 177.054688 364.945312 162.390625 379.054688 155.890625 386.390625 C 145.277344 398.222656 140.277344 404.332031 132.667969 415 C 124.277344 426.667969 119.390625 433.167969 118.054688 434.445312 C 116 436.390625 100.167969 443.890625 98.109375 443.890625 C 97.109375 443.890625 96.109375 443.722656 95.945312 443.5 Z M 95.945312 443.5 "/>
            <path d="M 220.832031 419.945312 C 211.890625 419.054688 193.222656 416.554688 188.609375 415.554688 C 185.054688 414.777344 168.945312 411.167969 165 410.222656 C 163 409.777344 160.667969 409.167969 159.722656 408.890625 C 158.832031 408.667969 157.167969 408.277344 156.109375 408.054688 C 155.054688 407.890625 153.332031 407.445312 152.390625 407.167969 C 150.667969 406.609375 150.554688 406.390625 150.554688 404.109375 C 150.554688 401.054688 152.277344 398.554688 161.390625 388.332031 C 171.167969 377.390625 186.945312 362.890625 197.722656 354.890625 C 200.667969 352.722656 203.945312 350.277344 205 349.445312 C 207.222656 347.722656 212.667969 343.945312 217.5 340.722656 C 225.054688 335.667969 235.390625 329 236.945312 328.109375 C 237.890625 327.609375 240.222656 326.167969 242.222656 324.945312 C 244.222656 323.667969 246.222656 322.5 246.667969 322.277344 C 247.109375 322.109375 248.945312 321.054688 250.722656 320 C 256.945312 316.222656 265.890625 311.167969 270.277344 308.832031 C 272.722656 307.554688 275.390625 306.054688 276.222656 305.5 C 277.109375 304.832031 278.609375 304.445312 280.167969 304.445312 C 283.167969 304.445312 282.722656 303.832031 289.945312 317.945312 C 292.945312 323.777344 296.667969 331.109375 298.277344 334.109375 C 301.332031 340.054688 301.890625 343.054688 300.167969 344.554688 C 299.609375 345.054688 296.167969 346.945312 292.5 348.722656 C 288.832031 350.554688 284.109375 353.054688 281.945312 354.222656 C 279.832031 355.390625 276.332031 357.222656 274.222656 358.332031 C 272.054688 359.390625 270 360.832031 269.609375 361.445312 C 268.945312 362.5 269 362.832031 270.277344 364.390625 C 271.109375 365.332031 272.054688 366.109375 272.445312 366.109375 C 272.832031 366.109375 275.5 364.890625 278.390625 363.390625 C 298.109375 353.167969 302.5 351.109375 304.390625 351.109375 C 305.5 351.109375 306.667969 351.332031 307 351.554688 C 307.332031 351.777344 309.554688 355.777344 311.890625 360.5 C 314.222656 365.222656 316.332031 369.332031 316.609375 369.667969 C 316.890625 370 320.667969 377.054688 325 385.277344 C 330.945312 396.554688 333 400.890625 333.167969 402.777344 C 333.277344 404.167969 333.167969 405.554688 332.945312 405.890625 C 332.332031 406.667969 321.277344 410 311.109375 412.5 C 309.445312 412.890625 305.554688 413.890625 302.5 414.667969 C 299.445312 415.445312 295.277344 416.332031 293.222656 416.667969 C 291.167969 416.945312 289.167969 417.332031 288.777344 417.5 C 287.832031 417.832031 280.332031 418.722656 269.722656 419.722656 C 260.5 420.609375 229.445312 420.722656 220.832031 419.945312 Z M 300.945312 390 C 303.554688 390 303.945312 389.832031 304.667969 388.445312 C 305.167969 387.445312 305.554688 384.945312 305.609375 381.945312 L 305.722656 377.054688 L 303.832031 375.5 C 302.777344 374.667969 301.390625 373.777344 300.667969 373.609375 C 298.832031 373.167969 295.5 374.222656 292.890625 376.109375 C 290.277344 378 290.054688 379.109375 291.222656 383.777344 C 292 386.945312 295.222656 390.609375 296.945312 390.277344 C 297.554688 390.109375 299.390625 390 300.945312 390 Z M 279.445312 339.777344 C 281.277344 338.945312 282.109375 336.054688 281 334.277344 C 280.5 333.609375 278.277344 332.054688 276.054688 330.890625 L 271.945312 328.832031 L 270.445312 330.5 C 269.167969 331.890625 268.890625 332.777344 268.890625 334.945312 C 268.890625 338.332031 270 339.777344 273.332031 340.445312 C 275.945312 341 277.109375 340.890625 279.445312 339.777344 Z M 279.445312 339.777344 "/>
            <path d="M 340.609375 401.722656 C 340 401.109375 337.109375 395.832031 334.167969 389.890625 C 331.167969 384 328.332031 378.445312 327.777344 377.5 C 326.609375 375.554688 316.609375 356.609375 312.5 348.609375 C 310.945312 345.554688 308.890625 341.667969 307.945312 340 C 307.054688 338.332031 304.054688 332.722656 301.390625 327.5 C 298.722656 322.332031 294.832031 314.777344 292.722656 310.777344 C 290.5 306.554688 288.890625 302.777344 288.890625 301.832031 C 288.890625 299.554688 290.277344 298.445312 298.609375 294.222656 C 306.722656 290.054688 313.832031 286.332031 320 282.945312 C 324.609375 280.390625 333.777344 275.609375 338.054688 273.5 C 339.609375 272.722656 341.890625 271.390625 343.222656 270.5 C 345.777344 268.777344 349.390625 268.332031 350.445312 269.609375 C 350.777344 269.945312 352.667969 273.554688 354.722656 277.5 C 359.445312 286.609375 363.167969 293.722656 367.222656 301.109375 C 369 304.332031 374.445312 314.832031 379.332031 324.445312 C 388.332031 342.277344 397 358.722656 399.167969 362.222656 C 401.109375 365.390625 401.722656 367.5 401.554688 370.054688 C 401.390625 372.445312 401.277344 372.554688 396.945312 375.390625 C 394.5 377 392.109375 378.554688 391.667969 378.890625 C 390.109375 379.945312 381.945312 384.777344 381.109375 385.167969 C 380.667969 385.390625 378.554688 386.554688 376.390625 387.777344 C 371.167969 390.777344 352 400.222656 348.277344 401.667969 C 344.5 403.054688 342 403.109375 340.609375 401.722656 Z M 340.609375 401.722656 "/>
            <path d="M 130.332031 379.890625 C 129.945312 379.167969 129.332031 377.390625 129 375.832031 C 127.167969 366.777344 126.945312 364.222656 127 349.445312 C 127 333.722656 127.5 328.832031 130.277344 316.667969 C 133.832031 301.390625 144.054688 276.890625 151.890625 265 C 152.609375 263.945312 154.390625 261.167969 155.890625 258.890625 C 169.890625 237.222656 191.722656 214.832031 217.222656 196 C 225.109375 190.167969 226.722656 189.054688 231.945312 185.722656 C 234.722656 184 238.445312 181.609375 240.222656 180.445312 C 243.054688 178.609375 243.945312 178.332031 246.054688 178.445312 C 248.109375 178.554688 248.722656 178.890625 249.277344 180 C 258.109375 198.167969 265.277344 212.167969 270.054688 220.554688 C 273.222656 226.109375 274.054688 229.945312 272.5 231.667969 C 271.945312 232.277344 270.332031 233.445312 268.945312 234.277344 C 267.554688 235.054688 261.5 238.890625 255.554688 242.777344 C 249.609375 246.667969 242.777344 251 240.445312 252.5 C 237.445312 254.277344 236.109375 255.445312 236.109375 256.167969 C 236.109375 257.777344 237.777344 260 238.945312 260 C 241.277344 260 246.332031 257.109375 260.167969 247.832031 C 274.445312 238.277344 274.390625 238.277344 277.222656 238.445312 L 279.722656 238.609375 L 282.890625 244.722656 C 284.667969 248.109375 286.609375 251.945312 287.277344 253.277344 C 287.945312 254.609375 289.167969 256.945312 290.054688 258.445312 C 290.945312 259.945312 291.667969 261.390625 291.667969 261.667969 C 291.667969 261.890625 292.945312 264.277344 294.5 266.890625 C 297 271.222656 297.277344 271.945312 297.109375 274.554688 C 296.945312 277.445312 296.890625 277.5 294.167969 278.945312 C 292.667969 279.777344 290.5 280.890625 289.445312 281.5 C 288.390625 282.109375 282.5 285.167969 276.390625 288.332031 C 266.277344 293.554688 255.332031 299.277344 241.945312 306.390625 C 239.222656 307.832031 236.167969 309.609375 235.167969 310.332031 C 234.222656 311.054688 233.222656 311.667969 233 311.667969 C 232.777344 311.667969 229.945312 313.277344 226.722656 315.222656 C 223.5 317.167969 219.109375 319.667969 216.945312 320.832031 C 214.832031 321.945312 211.945312 323.609375 210.554688 324.5 C 209.167969 325.390625 207.667969 326.277344 207.222656 326.5 C 206 327.054688 186.777344 339.832031 180.445312 344.277344 C 172.777344 349.667969 170.667969 351.277344 162.945312 357.5 C 159.167969 360.554688 155.277344 363.609375 154.332031 364.277344 C 153.390625 365 151.445312 366.609375 150 367.890625 C 148.609375 369.222656 145.5 371.890625 143.167969 373.832031 C 140.777344 375.777344 138.222656 378.222656 137.445312 379.277344 C 136.222656 380.890625 135.722656 381.109375 133.609375 381.109375 C 131.667969 381.109375 131 380.832031 130.332031 379.890625 Z M 130.332031 379.890625 "/>
            <path d="M 407.890625 364.054688 C 407.277344 363.167969 404 357 400.554688 350.277344 C 397.109375 343.554688 393.167969 336.109375 391.890625 333.777344 C 390.554688 331.390625 389.445312 329.332031 389.445312 329.222656 C 389.445312 328.945312 383.554688 317.777344 377.054688 305.777344 C 375.054688 302.054688 371.667969 295.667969 369.554688 291.609375 C 365.054688 282.890625 359.554688 272.777344 357.890625 270 C 357.109375 268.722656 356.667969 267.167969 356.667969 265.390625 C 356.667969 262.832031 356.722656 262.722656 359.722656 260.832031 C 361.390625 259.777344 362.890625 258.890625 363.054688 258.890625 C 363.222656 258.890625 365.832031 257.5 368.777344 255.777344 C 371.722656 254 375.945312 251.609375 378.054688 250.390625 C 382.277344 248 397.445312 239.054688 406.390625 233.722656 C 409.445312 231.890625 413.832031 229.332031 416.109375 228.054688 C 418.390625 226.777344 421.167969 225.222656 422.222656 224.609375 C 423.277344 224 427.277344 221.832031 431.109375 219.722656 C 434.945312 217.667969 445.554688 211.554688 454.722656 206.222656 C 478.890625 192.109375 482.277344 189.554688 466.5 197.277344 C 458.390625 201.277344 457.609375 201.667969 451.945312 204.222656 C 450.109375 205.054688 446.222656 206.832031 443.332031 208.167969 C 440.445312 209.554688 436.667969 211.277344 435 212.054688 C 433.332031 212.832031 426.945312 215.890625 420.832031 218.890625 C 414.722656 221.832031 408.609375 224.777344 407.222656 225.445312 C 405.832031 226.054688 402.554688 227.609375 399.890625 228.832031 C 397.222656 230.109375 394.890625 231.109375 394.667969 231.109375 C 394.5 231.109375 388.222656 234.109375 380.722656 237.777344 C 368.054688 244 366.890625 244.5 364.277344 244.332031 L 361.445312 244.167969 L 357 235.5 C 348.890625 219.777344 346.667969 215.667969 345.277344 214.167969 C 343.890625 212.722656 343.890625 212.722656 342.222656 213.722656 C 340 215 340.054688 216.277344 342.667969 221.554688 C 344.667969 225.554688 349.945312 235.390625 351.109375 237.222656 C 353.445312 241 355.554688 245.832031 355.554688 247.554688 C 355.554688 249.445312 355.445312 249.554688 351.832031 251.222656 C 349.722656 252.109375 344.222656 254.722656 339.554688 257 C 334.890625 259.277344 330.945312 261.109375 330.777344 261.109375 C 330.609375 261.109375 325.832031 263.390625 320.222656 266.222656 C 312.832031 269.832031 309.167969 271.332031 307.222656 271.554688 L 304.554688 271.777344 L 302.332031 268 C 301.167969 265.890625 297.5 259.054688 294.277344 252.777344 C 291.054688 246.5 286.777344 238.277344 284.722656 234.445312 C 282.667969 230.609375 279 223.609375 276.5 218.890625 C 274.054688 214.167969 270.890625 208.167969 269.445312 205.554688 C 268 202.945312 264.609375 196.609375 262 191.445312 C 259.332031 186.222656 256.609375 181.277344 256 180.390625 C 255.109375 179.167969 254.832031 177.832031 254.777344 175.390625 L 254.722656 172.054688 L 258.609375 169.945312 C 261.945312 168.109375 275.777344 162.054688 283.890625 158.890625 C 287.554688 157.445312 298.722656 153.890625 301.332031 153.332031 C 302.609375 153.054688 305.222656 152.445312 307.167969 151.945312 C 309.167969 151.5 312.390625 150.832031 314.390625 150.5 C 316.390625 150.222656 319.554688 149.722656 321.390625 149.445312 C 336.554688 147.054688 338.277344 146.945312 362.222656 146.945312 C 380.722656 146.945312 387.554688 147.167969 393.890625 147.890625 C 403.222656 149 415 150.722656 421.390625 152 C 423.832031 152.5 427.167969 153.109375 428.777344 153.332031 C 433.890625 154.109375 453.832031 159.277344 464.167969 162.5 C 474.722656 165.777344 483.554688 168.445312 485.277344 168.890625 C 486.222656 169.109375 488.222656 169.777344 489.722656 170.390625 C 492.890625 171.722656 497.277344 173.332031 501.554688 174.777344 C 506.832031 176.609375 507.277344 177.609375 506.054688 185.667969 C 505.554688 189 500.332031 215.945312 498.890625 222.777344 C 497.167969 231 491.109375 251.109375 487.5 260.554688 C 487 261.945312 486.167969 264.054688 485.722656 265.277344 C 482.390625 274.054688 472.445312 294.390625 467.445312 302.777344 C 462.167969 311.667969 452.167969 325.777344 445.945312 333.277344 C 438.5 342.167969 426.390625 354.390625 417.109375 362.390625 C 413.945312 365.109375 413.109375 365.554688 411.222656 365.554688 C 409.390625 365.554688 408.777344 365.277344 407.890625 364.054688 Z M 428.332031 286.109375 C 431.777344 286.109375 433.609375 285.332031 436.167969 282.777344 L 438.777344 280.167969 L 438.054688 276.5 C 437.609375 274.167969 436.554688 271.445312 435.222656 269.109375 C 433.167969 265.609375 432.890625 265.332031 429.945312 264.445312 C 427.5 263.722656 426.554688 263.609375 425.667969 264.109375 C 423.832031 265.109375 415.054688 273.890625 414.667969 275.109375 C 414 277.277344 415.609375 281.277344 418.277344 284.054688 C 421.445312 287.445312 422.5 287.890625 424.945312 286.890625 C 425.945312 286.445312 427.5 286.109375 428.332031 286.109375 Z M 333.109375 199.332031 C 334.054688 198.609375 335.722656 197 336.890625 195.722656 C 338.609375 193.777344 338.945312 193.109375 338.609375 191.777344 C 338.054688 189.167969 335.445312 186.445312 332.722656 185.722656 C 327.890625 184.445312 326.332031 184.332031 325.390625 185.445312 C 324.554688 186.390625 324.554688 186.554688 325.667969 188.332031 C 326.332031 189.390625 327.054688 191.722656 327.277344 193.445312 C 327.667969 196.722656 329.554688 200.554688 330.777344 200.554688 C 331.167969 200.554688 332.222656 200 333.109375 199.332031 Z M 333.109375 199.332031 "/>
        </g>
        <g id="background" fill="${background}">
            <path d="M 0 300 L 0 0 L 600 0 L 600 600 L 0 600 Z M 106.722656 438.054688 C 111.332031 435.832031 115.722656 433.445312 116.390625 432.777344 C 117.722656 431.5 122.609375 425 131 413.332031 C 138.609375 402.667969 143.609375 396.554688 154.222656 384.722656 C 160.722656 377.390625 175.390625 363.277344 179.445312 360.277344 C 180.277344 359.667969 182.722656 357.667969 184.890625 355.832031 C 187 354 190.332031 351.390625 192.222656 350 C 194.167969 348.609375 197.832031 345.945312 200.5 344 C 203.109375 342.054688 205.609375 340.332031 206.054688 340.167969 C 206.5 339.945312 209.832031 337.777344 213.554688 335.277344 C 217.277344 332.777344 220.667969 330.609375 221.222656 330.445312 C 221.722656 330.222656 224.390625 328.554688 227.222656 326.722656 C 230 324.832031 232.390625 323.332031 232.554688 323.332031 C 232.667969 323.332031 235 322 237.667969 320.332031 C 242.445312 317.390625 243.5 316.777344 252.777344 311.667969 C 255.390625 310.222656 260 307.667969 263.054688 306 C 268.890625 302.722656 272 301.109375 274.722656 299.777344 C 275.667969 299.390625 278.777344 297.722656 281.667969 296.109375 C 284.554688 294.5 290.722656 291.277344 295.277344 288.890625 C 310 281.390625 320.222656 276.054688 322.5 274.722656 C 323.722656 274 325.332031 273.054688 326.109375 272.609375 C 326.890625 272.167969 329.109375 270.890625 331.109375 269.832031 C 333.109375 268.777344 336.777344 266.832031 339.167969 265.445312 C 341.609375 264.054688 345.890625 261.722656 348.609375 260.277344 C 351.390625 258.777344 354.554688 257 355.667969 256.277344 C 356.832031 255.554688 358 255 358.332031 255 C 358.667969 255 359.890625 254.390625 361.109375 253.609375 C 362.332031 252.832031 363.554688 252.222656 363.832031 252.222656 C 364.109375 252.222656 364.554688 251.890625 364.890625 251.5 C 365.222656 251.167969 367.109375 250 369.109375 248.945312 C 373.109375 246.890625 373.722656 246.109375 370.222656 247.554688 C 369.054688 248.054688 368 248.445312 367.890625 248.390625 C 367.832031 248.332031 363.832031 250.277344 359 252.722656 C 354.222656 255.167969 346.390625 259 341.667969 261.277344 C 316.445312 273.332031 307.945312 277.5 286.667969 288.445312 C 272.667969 295.667969 264.222656 300.054688 263.609375 300.554688 C 263.332031 300.777344 259.554688 302.777344 255.277344 305 C 242.5 311.609375 228.890625 319.390625 218.332031 326.054688 C 216.332031 327.277344 214 328.722656 213.054688 329.222656 C 209.222656 331.390625 187.277344 346.390625 179.167969 352.5 C 177.054688 354.054688 174.277344 356.054688 173.054688 356.832031 C 169.167969 359.390625 156.554688 369.609375 151.945312 373.890625 C 150.109375 375.609375 146.722656 378.722656 144.445312 380.832031 C 124.667969 399.332031 112 413.222656 105.167969 424.054688 C 100 432.222656 96.054688 442.222656 98 442.222656 C 98.167969 442.222656 102.109375 440.332031 106.722656 438.054688 Z M 268.054688 418.054688 C 278.667969 417.054688 286.167969 416.167969 287.109375 415.832031 C 287.5 415.667969 289.5 415.277344 291.554688 415 C 293.609375 414.667969 297.777344 413.777344 300.832031 413 C 303.890625 412.222656 307.777344 411.222656 309.445312 410.832031 C 319.722656 408.332031 330.722656 405 331.222656 404.222656 C 331.445312 403.890625 331.5 403.167969 331.332031 402.554688 C 330.945312 401.445312 316.832031 374.5 313.777344 369.167969 C 312.777344 367.332031 310.554688 363.054688 308.890625 359.609375 C 307.277344 356.167969 305.554688 353.222656 305.054688 353.054688 C 304.332031 352.777344 296.5 356.554688 279.222656 365.5 C 273.554688 368.445312 270.777344 368.554688 268.667969 366.054688 C 267 364.109375 266.777344 361.445312 268.054688 359.609375 C 268.554688 358.945312 271.945312 356.832031 275.667969 355 C 279.390625 353.109375 283.054688 351.167969 283.832031 350.609375 C 284.609375 350.054688 288.167969 348.222656 291.667969 346.554688 C 295.222656 344.832031 298.445312 343.054688 298.832031 342.554688 C 299.5 341.777344 299.222656 340.890625 296.832031 336.222656 C 295.277344 333.277344 291.5 325.890625 288.445312 319.890625 C 280.667969 304.667969 280.945312 305 277.890625 307.167969 C 277.054688 307.722656 274.390625 309.222656 271.945312 310.5 C 267.554688 312.832031 258.609375 317.890625 252.390625 321.667969 C 250.609375 322.722656 248.777344 323.777344 248.332031 323.945312 C 247.890625 324.167969 245.890625 325.332031 243.890625 326.609375 C 241.890625 327.832031 239.554688 329.277344 238.609375 329.777344 C 237.054688 330.667969 226.722656 337.332031 219.167969 342.390625 C 214.332031 345.609375 208.890625 349.390625 206.667969 351.109375 C 205.609375 351.945312 202.332031 354.390625 199.390625 356.554688 C 193.554688 360.890625 182.609375 370.332031 174.5 378.054688 C 165.109375 387.054688 152.222656 402.109375 152.222656 404.109375 C 152.222656 404.945312 154.167969 405.722656 157.777344 406.390625 C 158.832031 406.609375 160.5 407 161.390625 407.222656 C 162.332031 407.5 164.667969 408.109375 166.667969 408.554688 C 170.609375 409.5 186.722656 413.109375 190.277344 413.890625 C 194.890625 414.890625 213.554688 417.390625 222.5 418.277344 C 231 419.054688 258.890625 418.945312 268.054688 418.054688 Z M 346.609375 400 C 350.332031 398.554688 369.5 389.109375 374.722656 386.109375 C 376.890625 384.890625 379 383.722656 379.445312 383.5 C 380.554688 383 389 377.945312 389.722656 377.390625 C 390.054688 377.109375 392.167969 375.722656 394.5 374.277344 C 400.109375 370.832031 400.390625 370.445312 399.445312 367.890625 C 399.054688 366.777344 398.167969 364.945312 397.5 363.890625 C 395.390625 360.554688 386.890625 344.332031 377.667969 326.109375 C 372.777344 316.5 367.332031 306 365.554688 302.777344 C 361.554688 295.445312 357.832031 288.445312 352.945312 278.945312 C 350.832031 274.832031 348.722656 271.222656 348.277344 270.945312 C 347.722656 270.554688 346.722656 270.945312 345 272.109375 C 343.609375 273 341.277344 274.390625 339.722656 275.167969 C 335.445312 277.277344 326.277344 282.054688 321.667969 284.609375 C 315.5 288 308.390625 291.722656 300.277344 295.890625 C 296.332031 297.890625 292.5 300.054688 291.832031 300.722656 L 290.554688 301.832031 L 294.390625 309.109375 C 296.5 313.109375 300.390625 320.667969 303.054688 325.832031 C 305.722656 331.054688 308.722656 336.667969 309.609375 338.332031 C 310.554688 340 312.609375 343.890625 314.167969 346.945312 C 318.277344 354.945312 328.277344 373.890625 329.445312 375.832031 C 330 376.777344 332.832031 382.332031 335.832031 388.222656 C 340.332031 397.222656 342.609375 401.109375 343.5 401.109375 C 343.554688 401.109375 344.945312 400.609375 346.609375 400 Z M 135.777344 377.609375 C 136.554688 376.554688 139.109375 374.109375 141.5 372.167969 C 143.832031 370.222656 146.945312 367.554688 148.332031 366.222656 C 149.777344 364.945312 151.722656 363.332031 152.667969 362.609375 C 153.609375 361.945312 157.5 358.890625 161.277344 355.832031 C 169 349.609375 171.109375 348 178.777344 342.609375 C 185.109375 338.167969 204.332031 325.390625 205.554688 324.832031 C 206 324.609375 207.5 323.722656 208.890625 322.832031 C 210.277344 321.945312 213.167969 320.277344 215.277344 319.167969 C 217.445312 318 221.832031 315.5 225.054688 313.554688 C 228.277344 311.609375 231.109375 310 231.332031 310 C 231.554688 310 232.554688 309.390625 233.5 308.667969 C 234.5 307.945312 237.554688 306.167969 240.277344 304.722656 C 253.667969 297.609375 264.609375 291.890625 274.722656 286.667969 C 280.832031 283.5 286.722656 280.445312 287.777344 279.832031 C 288.832031 279.222656 291 278.109375 292.5 277.277344 C 294.390625 276.332031 295.332031 275.445312 295.445312 274.609375 C 295.554688 273.832031 294.5 271.390625 292.832031 268.554688 C 291.277344 265.945312 290 263.5 290 263.109375 C 290 262.722656 289.777344 262.222656 289.5 261.945312 C 288.945312 261.332031 284.277344 252.609375 280.722656 245.390625 C 279.390625 242.722656 277.945312 240.390625 277.5 240.167969 C 276.554688 239.832031 273.890625 241.390625 261.832031 249.5 C 251.390625 256.5 247.390625 258.945312 243 261.054688 C 240.167969 262.390625 239.5 262.5 237.945312 262 C 235.390625 261.109375 234.5 259.609375 234.445312 256.332031 L 234.445312 253.445312 L 238.777344 250.832031 C 241.109375 249.332031 247.945312 245 253.890625 241.109375 C 259.832031 237.277344 265.722656 233.5 266.945312 232.777344 C 270.890625 230.5 271.609375 229.554688 271.109375 227.667969 C 270.832031 226.777344 269.5 224.109375 268.167969 221.777344 C 263.667969 214 251.109375 189.609375 248.722656 184 C 247.890625 182.109375 246.890625 180.390625 246.390625 180.222656 C 245.945312 180.054688 244.5 180.554688 243.222656 181.332031 C 231.054688 188.832031 228.832031 190.277344 219.277344 197.390625 C 193.5 216.445312 171.609375 238.777344 157.554688 260.554688 C 156.054688 262.832031 154.277344 265.609375 153.554688 266.667969 C 145.722656 278.554688 135.5 303.054688 131.945312 318.332031 C 129.277344 330.109375 128.667969 335.554688 128.667969 349.445312 C 128.609375 362.5 128.832031 365.277344 130.667969 374.167969 C 131.332031 377.390625 132.445312 379.445312 133.609375 379.445312 C 134.054688 379.445312 135 378.609375 135.777344 377.609375 Z M 415.445312 360.722656 C 424.722656 352.722656 436.832031 340.5 444.277344 331.609375 C 450.5 324.109375 460.5 310 465.777344 301.109375 C 470.777344 292.722656 480.722656 272.390625 484.054688 263.609375 C 484.5 262.390625 485.332031 260.277344 485.832031 258.890625 C 489.445312 249.390625 495.5 229.222656 497.222656 221.109375 C 500.109375 207.5 503.445312 190.332031 503.890625 187.109375 C 504.167969 184.890625 504.554688 182.277344 504.777344 181.332031 C 505.222656 179.109375 503.945312 177.832031 499.890625 176.445312 C 495.609375 175 491.222656 173.390625 488.054688 172.054688 C 486.554688 171.445312 484.554688 170.777344 483.609375 170.554688 C 481.890625 170.109375 473.054688 167.445312 462.5 164.167969 C 452.167969 160.945312 432.222656 155.777344 427.109375 155 C 425.5 154.777344 422.167969 154.167969 419.722656 153.667969 C 413.332031 152.390625 401.554688 150.609375 392.222656 149.554688 C 380.390625 148.222656 343.167969 148.222656 333.332031 149.609375 C 319.390625 151.554688 312.167969 152.777344 307.5 153.945312 C 306.277344 154.277344 304.277344 154.722656 303 155 C 300.390625 155.554688 289.222656 159.109375 285.554688 160.554688 C 277.390625 163.722656 263.609375 169.777344 260.277344 171.609375 C 256.609375 173.609375 256.390625 173.832031 256.554688 175.554688 C 256.609375 176.554688 257.167969 178.054688 257.722656 178.832031 C 258.332031 179.667969 261 184.554688 263.667969 189.777344 C 266.277344 194.945312 269.667969 201.277344 271.109375 203.890625 C 272.554688 206.5 275.722656 212.5 278.167969 217.222656 C 280.667969 221.945312 284.332031 228.945312 286.390625 232.777344 C 288.445312 236.609375 292.722656 244.832031 295.945312 251.109375 C 304.722656 268.167969 305.945312 270.109375 307.390625 269.722656 C 308.054688 269.5 313.167969 267.109375 318.722656 264.390625 C 324.277344 261.667969 328.945312 259.445312 329.109375 259.445312 C 329.277344 259.445312 333.222656 257.609375 337.890625 255.332031 C 342.554688 253.054688 348.054688 250.445312 350.167969 249.554688 C 352.222656 248.609375 353.890625 247.722656 353.890625 247.554688 C 353.890625 247.222656 350.390625 240.390625 349.445312 238.890625 C 348.277344 237 343 227.222656 341.109375 223.332031 C 337.445312 215.945312 337.5 213.554688 341.332031 211.667969 C 343.390625 210.722656 344 210.609375 345.167969 211.167969 C 347.390625 212.167969 348.109375 213.332031 358.554688 233.609375 C 361.945312 240.222656 363.390625 242.554688 364.277344 242.667969 C 364.890625 242.777344 371.554688 239.832031 379.054688 236.167969 C 386.554688 232.445312 392.832031 229.445312 393 229.445312 C 393.222656 229.445312 395.554688 228.445312 398.222656 227.167969 C 400.890625 225.945312 404.167969 224.390625 405.554688 223.777344 C 406.945312 223.109375 413.054688 220.167969 419.167969 217.222656 C 425.277344 214.222656 431.667969 211.167969 433.332031 210.390625 C 435 209.609375 438.777344 207.890625 441.667969 206.5 C 444.554688 205.167969 448.445312 203.332031 450.277344 202.5 C 452.109375 201.667969 456 199.890625 458.890625 198.5 C 461.777344 197.109375 466.554688 194.832031 469.445312 193.5 C 484.390625 186.445312 486.609375 185.554688 488.890625 185.554688 C 491.109375 185.554688 491 186.222656 488.5 188.109375 C 483.332031 192.054688 448.832031 212.667969 432.777344 221.390625 C 428.945312 223.5 424.945312 225.667969 423.890625 226.277344 C 422.832031 226.890625 420.054688 228.445312 417.777344 229.722656 C 415.5 231 411.109375 233.554688 408.054688 235.390625 C 399.109375 240.722656 383.945312 249.667969 379.722656 252.054688 C 377.609375 253.277344 373.390625 255.667969 370.445312 257.445312 C 367.5 259.167969 364.890625 260.554688 364.722656 260.554688 C 364.554688 260.554688 363.054688 261.445312 361.390625 262.5 C 358 264.667969 357.722656 265.445312 359.554688 268.332031 C 361.222656 271.109375 366.722656 281.222656 371.222656 289.945312 C 373.332031 294 376.722656 300.390625 378.722656 304.109375 C 385.222656 316.109375 391.109375 327.277344 391.109375 327.554688 C 391.109375 327.667969 392.222656 329.722656 393.554688 332.109375 C 394.832031 334.445312 398.777344 341.890625 402.222656 348.609375 C 408.722656 361.332031 410.222656 363.890625 411.222656 363.890625 C 411.5 363.890625 413.445312 362.445312 415.445312 360.722656 Z M 415.445312 360.722656 "/>
            <path d="M 295.554688 392.890625 C 295.109375 392.722656 293.722656 391.554688 292.445312 390.332031 C 290.167969 388 289.5 386.332031 288.609375 380.109375 C 288.109375 377.109375 289.054688 375.609375 292.609375 373.5 C 294.832031 372.222656 295.890625 371.945312 299.167969 371.945312 C 302.554688 371.945312 303.332031 372.109375 305.109375 373.5 C 307 375 308.609375 377.832031 307.890625 378.554688 C 307.722656 378.722656 307.5 381 307.445312 383.609375 C 307.167969 390.667969 305.667969 392.777344 301.332031 392 C 300.167969 391.777344 298.890625 391.890625 297.945312 392.390625 C 297.109375 392.832031 296 393.054688 295.554688 392.890625 Z M 295.554688 392.890625 "/>
            <path d="M 271.5 342.109375 C 268 341.332031 267.277344 340.167969 267.167969 335.109375 C 267.054688 330.609375 267.945312 328.722656 270.777344 327.332031 C 272.222656 326.609375 272.667969 326.722656 277.109375 329 C 283.277344 332.109375 284.390625 333.722656 283.277344 337.945312 C 282.667969 340.222656 282.167969 341 280.832031 341.609375 C 278.667969 342.667969 274.832031 342.832031 271.5 342.109375 Z M 271.5 342.109375 "/>
            <path d="M 421.390625 289.332031 C 418.609375 288.390625 414.222656 283.667969 413.445312 280.832031 C 412.554688 277.445312 412.609375 273.832031 413.609375 272.445312 C 415.277344 270 422.890625 263 424.777344 262.167969 C 426.667969 261.332031 426.945312 261.332031 430.722656 262.5 L 434.722656 263.722656 L 437 267.667969 C 438.777344 270.722656 439.390625 272.609375 440 276.332031 L 440.722656 281.054688 L 439.277344 283 C 436.945312 286 434.777344 287.277344 431.222656 287.609375 C 429.5 287.777344 427 288.390625 425.667969 289 C 424.332031 289.554688 423.222656 290 423.167969 289.945312 C 423.109375 289.945312 422.332031 289.667969 421.390625 289.332031 Z M 421.390625 289.332031 "/>
            <path d="M 328.277344 201.609375 C 326.722656 200.054688 325.554688 197.109375 325.554688 194.609375 C 325.554688 193.390625 324.945312 191.609375 324.167969 190.277344 C 322.5 187.554688 322.390625 185 323.890625 183.609375 C 324.777344 182.777344 325.554688 182.667969 328.722656 183 C 335.890625 183.722656 339.054688 185.722656 340.5 190.5 C 341.445312 193.777344 341.277344 194.390625 338.777344 197.167969 C 333.777344 202.667969 330.609375 203.945312 328.277344 201.609375 Z M 328.277344 201.609375 "/>
        </g>
    </g>`;
}

const generate = e => {
    const qrcode = new QRCode({
        content: textInput.value,
        background: backInput.value,
        color: foreInput.value,
        /* presets */
        width: 600,
        height: 600,
        container: 'svg',
        ecl: 'H',
        padding: 2,
        join: true
    });

    output.innerHTML = qrcode.svg();
    const svg = output.getElementsByTagName('svg')[0];
    svg.innerHTML += cabio(foreInput.value, backInput.value);
}

/* https://stackoverflow.com/a/38019175 */
const save = e => {
    const svgBlob = new Blob([output.innerHTML], {type:'image/svg+xml;charset=utf-8'});
    const svgURL = URL.createObjectURL(svgBlob);
    const downloadLink = document.createElement("a");
    downloadLink.href = svgURL;
    downloadLink.download = "cabio.svg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

textInput.oninput = generate;
foreInput.oninput = generate;
backInput.oninput = generate;
saveInput.onclick = save;
