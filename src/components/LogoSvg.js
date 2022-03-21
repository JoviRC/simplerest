import styled from "styled-components";

const TopSide = styled.g`
    display: inline-block;
    fill: ${(props) => props.theme.color.logoFigure};
`;
const MidSide = styled.g`
    display: inline-block;
    fill: ${(props) => props.theme.color.logoText};
`;
const BottomSide = styled.g`
    display: inline-block;
    fill: ${(props) => props.theme.color.logoFigure};
`;

export const LogoSvg = ({ height, width }) => {
    return (
        <>
            <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width={width}
                height={height}
                viewBox="0 0 875.000000 919.000000"
                preserveAspectRatio="xMidYMid meet"
            >
                <g
                    transform="translate(0.000000,919.000000) scale(0.100000,-0.100000)"
                    stroke="none"
                >
                    <TopSide>
                        <path
                            className="topSide"
                            d="M3404 8138 c-11 -17 -6 -78 7 -94 14 -17 51 -18 67 -2 17 17 15 59
-4 86 -16 23 -58 30 -70 10z"
                        />
                        <path
                            className="topSide"
                            d="M5191 8137 c-18 -23 -25 -75 -11 -92 18 -22 57 -18 74 7 19 27 21 69
4 86 -16 16 -53 15 -67 -1z"
                        />
                        <path
                            className="topSide"
                            d="M4296 8074 c-21 -20 -20 -78 0 -99 9 -9 28 -15 43 -13 22 3 27 9 32
46 9 68 -35 107 -75 66z"
                        />
                        <path
                            className="topSide"
                            d="M3458 7969 c-26 -15 -23 -44 23 -223 141 -554 166 -657 158 -662 -13
-8 -103 -34 -106 -30 -2 2 -17 43 -34 92 -68 198 -79 224 -105 230 -30 8 -54
-11 -54 -41 0 -12 23 -86 50 -165 39 -111 48 -145 38 -152 -20 -13 -98 -41
-101 -37 -6 8 -87 189 -137 304 -29 66 -57 126 -63 133 -6 7 -24 12 -41 10
-54 -5 -47 -37 59 -275 52 -118 94 -217 93 -218 -21 -18 -92 -45 -100 -37 -9
9 -34 54 -230 415 l-92 168 -35 -3 c-63 -5 -55 -27 114 -338 85 -157 155 -290
155 -295 0 -11 -87 -62 -93 -55 -2 3 -62 94 -133 203 -128 196 -129 197 -163
195 -68 -6 -61 -27 78 -239 70 -107 130 -199 134 -206 8 -13 -71 -75 -90 -71
-7 2 -54 57 -106 123 -80 103 -98 120 -124 123 -24 2 -34 -2 -43 -17 -14 -27
-8 -38 101 -176 49 -62 89 -117 89 -122 0 -13 -78 -75 -90 -71 -4 2 -79 80
-166 173 -87 94 -212 228 -278 299 -67 70 -123 132 -126 136 -3 4 -14 12 -26
18 -27 14 -64 -10 -64 -41 1 -14 49 -73 133 -163 73 -78 206 -221 296 -318
l164 -177 -34 -37 c-19 -20 -37 -41 -41 -46 -4 -5 -63 41 -131 103 -69 61
-133 111 -144 111 -31 0 -45 -16 -41 -45 2 -21 32 -55 118 -134 63 -58 116
-108 118 -112 1 -3 -15 -26 -36 -50 l-40 -44 -58 46 c-188 147 -329 249 -343
249 -24 0 -41 -20 -41 -50 0 -21 30 -48 190 -170 104 -80 190 -148 190 -153 0
-18 -54 -88 -65 -83 -7 2 -57 33 -111 69 -429 279 -447 290 -474 281 -31 -12
-39 -53 -13 -76 10 -8 135 -91 278 -183 143 -92 264 -170 268 -175 4 -4 -6
-30 -24 -59 l-32 -51 -511 0 c-385 0 -515 -3 -524 -12 -15 -15 -15 -51 0 -66
17 -17 6559 -17 6576 0 16 16 15 53 -1 67 -10 7 -168 12 -526 13 l-511 3 -30
51 -29 52 160 103 c389 253 404 263 407 287 4 28 -14 52 -39 52 -11 0 -97 -50
-192 -112 -252 -163 -297 -192 -345 -222 l-43 -27 -19 23 c-10 13 -25 34 -32
47 -11 21 -10 25 16 44 16 11 92 70 170 130 77 60 148 114 157 120 33 20 42
47 24 73 -8 13 -24 24 -35 24 -17 0 -179 -117 -335 -242 -33 -26 -63 -48 -67
-48 -4 0 -23 20 -43 45 l-37 45 58 52 c33 29 90 83 129 119 65 64 68 68 57 93
-23 50 -55 36 -187 -84 l-120 -109 -44 44 -45 44 130 138 c71 76 158 170 195
208 266 281 289 311 257 343 -29 29 -56 12 -169 -110 -63 -67 -150 -160 -195
-207 -44 -47 -127 -136 -183 -198 l-103 -112 -44 36 c-24 21 -44 40 -44 44 0
4 42 61 93 126 51 65 96 126 100 136 11 29 -10 57 -43 57 -25 0 -42 -17 -130
-130 l-102 -130 -45 32 c-24 18 -46 35 -48 38 -2 3 13 30 33 60 190 285 223
340 220 367 -2 23 -8 29 -35 31 -37 4 -29 13 -170 -203 -54 -82 -106 -161
-116 -175 l-17 -25 -45 25 c-25 14 -45 29 -45 34 0 5 70 137 156 293 168 309
177 335 117 341 -40 4 -36 9 -213 -318 -73 -135 -137 -250 -144 -257 -14 -14
-102 27 -98 46 1 7 43 104 93 215 100 224 107 259 53 264 -17 2 -35 -3 -40
-10 -6 -7 -53 -109 -104 -226 -104 -235 -92 -221 -172 -187 l-37 15 50 147
c53 158 57 184 35 203 -27 21 -59 8 -73 -30 -33 -92 -104 -285 -106 -287 -2
-1 -26 5 -55 13 -62 19 -63 20 -26 154 65 242 174 686 174 712 0 21 -7 32 -25
40 -45 20 -58 -8 -119 -252 -134 -539 -153 -605 -167 -605 -8 1 -36 4 -62 9
-46 8 -49 10 -44 35 3 14 15 90 28 168 19 118 21 144 10 157 -16 19 -54 21
-69 3 -6 -7 -23 -86 -38 -174 l-27 -162 -51 6 c-28 3 -55 9 -60 13 -7 7 0 152
21 410 5 64 3 79 -11 93 -21 20 -36 21 -58 5 -13 -10 -19 -56 -32 -228 -22
-292 -19 -278 -59 -274 -17 1 -45 3 -60 3 l-28 1 1 336 c1 247 -2 339 -10 350
-18 20 -57 17 -70 -5 -6 -13 -10 -142 -10 -350 l0 -331 -22 -1 c-13 0 -38 -2
-55 -5 -18 -2 -33 -3 -33 -1 0 37 -41 479 -46 490 -7 20 -42 29 -66 16 -23
-12 -23 -37 1 -304 12 -138 14 -202 7 -206 -11 -6 -116 -20 -116 -15 0 34 -53
322 -61 332 -15 19 -53 18 -69 -1 -11 -13 -9 -42 9 -158 12 -78 24 -153 27
-167 4 -24 1 -26 -53 -38 -42 -9 -59 -9 -64 0 -4 6 -37 133 -75 282 -150 604
-148 599 -206 565z m1247 -913 c405 -65 785 -226 1120 -476 121 -90 334 -296
429 -415 67 -82 216 -297 216 -310 0 -3 -250 -5 -555 -5 l-554 0 -33 29 c-99
86 -321 206 -483 260 -185 61 -278 75 -515 75 -237 0 -330 -14 -515 -75 -162
-54 -384 -174 -483 -260 l-33 -29 -554 0 -555 0 41 68 c140 230 383 496 602
661 375 281 798 446 1272 495 93 9 504 -3 600 -18z"
                        />
                        <path
                            className="topSide"
                            d="M4300 6777 c-41 -21 -50 -52 -50 -178 0 -103 2 -119 21 -143 16 -20
29 -26 60 -26 47 0 92 37 87 72 -5 34 -27 33 -39 -2 -10 -28 -15 -31 -48 -28
l-36 3 -3 110 c-2 61 0 120 2 131 11 43 81 36 88 -8 4 -31 32 -29 36 2 6 50
-69 92 -118 67z"
                        />
                        <path
                            className="topSide"
                            d="M4064 6766 c-3 -8 2 -62 10 -121 23 -155 22 -183 -9 -191 -43 -11
-52 8 -71 158 -18 135 -30 167 -54 142 -7 -8 19 -226 35 -291 8 -34 49 -56 89
-49 43 8 70 39 69 79 -1 44 -33 269 -39 279 -8 13 -24 9 -30 -6z"
                        />
                        <path
                            className="topSide"
                            d="M4584 6758 c-18 -26 -62 -322 -51 -336 18 -22 35 12 42 84 l7 64 42
-6 c22 -4 42 -8 43 -8 1 -1 -2 -32 -8 -70 -12 -77 -7 -108 15 -85 18 19 69
330 56 343 -17 17 -30 -8 -42 -77 -11 -66 -11 -67 -42 -67 -51 0 -54 7 -43 83
7 47 7 71 0 78 -8 8 -13 7 -19 -3z"
                        />
                        <path
                            className="topSide"
                            d="M4891 6688 c-33 -89 -93 -299 -88 -312 7 -18 128 -58 141 -45 15 14
-11 36 -59 49 -25 7 -45 15 -45 18 0 3 8 29 17 59 10 33 21 52 29 49 56 -21
96 -28 105 -19 17 17 5 28 -50 43 -28 7 -51 17 -51 20 0 7 31 103 36 108 1 2
23 -4 48 -12 60 -20 78 -20 74 1 -3 14 -31 27 -125 57 -18 6 -25 3 -32 -16z"
                        />
                        <path
                            className="topSide"
                            d="M3666 6674 c-14 -15 -26 -33 -26 -41 0 -37 64 -241 83 -260 26 -29
75 -30 111 -2 31 25 34 70 8 139 -19 48 -34 56 -75 41 -37 -14 -35 -41 2 -41
25 0 31 -6 41 -35 18 -56 10 -79 -27 -83 -39 -4 -40 -2 -79 140 -22 80 -24
101 -14 113 16 19 70 20 70 1 0 -7 6 -19 14 -25 19 -16 36 7 25 36 -18 49 -91
58 -133 17z"
                        />
                        <path
                            className="topSide"
                            d="M3452 6607 c-7 -9 1 -38 29 -106 22 -51 39 -95 36 -97 -2 -2 -39 34
-82 81 -43 47 -82 85 -87 85 -5 0 -11 -6 -14 -14 -7 -17 111 -299 132 -316 28
-24 25 15 -7 90 -17 41 -35 86 -40 100 -6 16 22 -7 77 -62 136 -137 137 -105
4 190 -16 34 -31 62 -33 62 -3 0 -9 -6 -15 -13z"
                        />
                        <path
                            className="topSide"
                            d="M5193 6578 c-27 -37 -135 -289 -129 -303 9 -23 25 -9 48 41 18 43 40
56 54 33 4 -6 7 -39 8 -73 1 -47 4 -61 16 -61 11 0 16 15 20 52 4 41 11 56 34
74 29 23 86 130 86 161 0 22 -36 56 -79 74 -41 17 -46 17 -58 2z m93 -72 c5
-12 -50 -136 -60 -136 -2 0 -20 7 -40 15 l-36 15 37 74 37 75 28 -15 c16 -8
31 -21 34 -28z"
                        />
                        <path
                            className="topSide"
                            d="M3106 6451 c-3 -4 7 -41 23 -82 15 -41 40 -111 55 -156 29 -86 51
-118 62 -90 3 9 1 32 -6 52 -9 28 -9 39 0 50 18 22 30 19 67 -17 24 -23 36
-29 44 -21 12 12 10 13 -146 201 -54 66 -85 86 -99 63z m109 -130 c32 -39 34
-46 20 -54 -9 -5 -20 -5 -25 -1 -7 9 -43 111 -36 103 2 -2 20 -24 41 -48z"
                        />
                        <path
                            className="topSide"
                            d="M5447 6413 c-138 -223 -162 -273 -129 -273 14 0 183 290 177 301 -11
17 -25 9 -48 -28z"
                        />
                        <path
                            className="topSide"
                            d="M5545 6199 c-100 -98 -123 -125 -113 -136 9 -11 17 -9 43 17 34 33
56 38 74 16 9 -11 8 -22 -5 -49 -17 -36 -13 -74 7 -61 17 10 151 294 147 312
-7 35 -34 18 -153 -99z m59 -30 c-24 -48 -27 -51 -42 -35 -16 16 -15 19 20 52
21 19 40 34 43 34 3 0 -6 -23 -21 -51z"
                        />
                        <path
                            className="topSide"
                            d="M2861 6281 c-39 -37 -39 -66 0 -119 37 -50 71 -62 112 -39 39 23 52
21 76 -9 29 -37 27 -72 -4 -86 -20 -9 -28 -8 -44 6 -19 17 -41 15 -41 -4 0
-17 44 -50 66 -50 27 0 73 36 85 67 11 29 -6 65 -49 107 -32 30 -46 31 -110 5
-31 -13 -34 -12 -57 16 -28 35 -31 57 -9 79 19 20 38 20 58 1 17 -17 32 -19
41 -5 10 15 -41 60 -68 60 -14 0 -39 -13 -56 -29z"
                        />
                        <path
                            className="topSide"
                            d="M3767 7812 c-15 -17 -15 -27 3 -133 14 -79 25 -118 37 -126 22 -17
27 -16 53 5 l23 19 -19 113 c-10 62 -25 119 -32 127 -19 18 -46 16 -65 -5z"
                        />
                        <path
                            className="topSide"
                            d="M4828 7813 c-8 -10 -23 -67 -33 -128 l-17 -109 22 -18 c27 -21 31
-22 54 -5 25 19 56 238 37 261 -18 21 -44 20 -63 -1z"
                        />
                        <path
                            className="topSide"
                            d="M3247 7682 c-23 -25 -22 -32 14 -142 36 -108 43 -120 73 -120 28 0
46 18 46 45 0 40 -60 200 -81 218 -27 21 -32 21 -52 -1z"
                        />
                        <path
                            className="topSide"
                            d="M5353 7678 c-15 -20 -73 -188 -73 -212 0 -28 18 -46 46 -46 30 0 36
11 78 128 28 80 34 108 26 123 -12 22 -62 26 -77 7z"
                        />
                        <path
                            className="topSide"
                            d="M2652 7658 c-16 -16 -15 -43 3 -77 19 -37 42 -45 71 -26 29 19 30 40
4 83 -21 34 -55 43 -78 20z"
                        />
                        <path
                            className="topSide"
                            d="M5945 7653 c-30 -29 -37 -63 -20 -89 8 -13 24 -24 35 -24 23 0 60 53
60 86 0 42 -44 58 -75 27z"
                        />
                        <path
                            className="topSide"
                            d="M1848 7289 c-26 -15 -22 -61 7 -89 21 -20 30 -22 53 -14 38 13 41 49
6 85 -30 31 -40 34 -66 18z"
                        />
                        <path
                            className="topSide"
                            d="M6748 7271 c-29 -26 -32 -32 -23 -57 13 -38 49 -43 81 -13 30 28 32
74 5 89 -27 14 -26 14 -63 -19z"
                        />
                        <path
                            className="topSide"
                            d="M2330 7183 c-19 -8 -30 -23 -30 -46 0 -22 127 -185 151 -192 27 -9
59 12 59 39 0 33 -136 209 -159 205 -3 0 -13 -3 -21 -6z"
                        />
                        <path
                            className="topSide"
                            d="M6289 7178 c-20 -17 -113 -137 -128 -166 -23 -43 15 -87 55 -64 34
19 143 167 144 194 0 40 -41 60 -71 36z"
                        />
                        <path
                            className="topSide"
                            d="M6615 6744 c-69 -62 -85 -82 -85 -105 0 -41 32 -56 68 -33 24 16 78
63 139 121 32 30 30 71 -3 83 -14 6 -27 10 -29 10 -3 0 -43 -34 -90 -76z"
                        />
                        <path
                            className="topSide"
                            d="M1910 6795 c-7 -8 -10 -25 -6 -37 6 -28 162 -168 186 -168 24 0 40
20 40 51 0 20 -18 42 -79 98 -81 73 -116 87 -141 56z"
                        />
                        <path
                            className="topSide"
                            d="M1406 6494 c-9 -8 -16 -22 -16 -30 0 -24 50 -64 79 -64 59 0 70 58
19 90 -40 24 -61 25 -82 4z"
                        />
                        <path
                            className="topSide"
                            d="M7165 6486 c-29 -29 -31 -48 -9 -70 21 -22 46 -20 78 5 21 16 26 28
24 53 -3 27 -7 31 -35 34 -24 2 -39 -3 -58 -22z"
                        />
                    </TopSide>
                    <MidSide>
                        <path
                            className="midSide"
                            d="M1570 5436 c-67 -20 -91 -31 -138 -65 -97 -71 -161 -227 -148 -362
11 -118 70 -253 148 -333 42 -44 44 -50 23 -86 -35 -62 -9 -90 84 -90 l68 0
76 -79 c84 -86 108 -131 111 -202 1 -56 -23 -95 -74 -121 -30 -15 -37 -16 -69
-2 -48 19 -68 45 -87 113 -25 89 -37 101 -92 101 -78 0 -176 -19 -189 -37 -31
-40 -7 -158 55 -276 74 -141 186 -195 381 -184 127 7 180 27 245 92 91 90 132
198 124 332 -5 78 -36 196 -57 213 -3 3 -16 26 -29 51 -13 25 -57 80 -98 123
-62 65 -72 80 -64 96 16 29 12 68 -7 79 -10 5 -36 8 -58 8 -63 -1 -88 10 -115
50 -14 20 -30 41 -36 47 -6 6 -16 32 -22 58 -31 122 4 208 83 208 44 0 66 -19
96 -86 40 -89 63 -95 214 -58 73 18 88 35 81 89 -20 132 -105 249 -218 300
-51 24 -80 29 -153 32 -55 2 -108 -2 -135 -11z"
                        />
                        <path
                            className="midSide"
                            d="M4740 5402 c-74 -4 -87 -10 -99 -43 -7 -21 -11 -144 -11 -349 l0
-317 -50 -31 c-38 -24 -50 -37 -50 -56 0 -28 28 -59 71 -76 l28 -12 3 -340 c3
-326 4 -340 23 -354 26 -20 227 -16 247 4 10 10 14 79 18 272 4 193 8 262 18
272 8 8 51 15 110 19 116 6 183 34 255 104 94 91 119 190 113 445 -4 164 -18
241 -51 280 -6 8 -15 23 -18 32 -10 27 -124 106 -180 125 -50 16 -315 32 -427
25z m334 -310 c55 -31 71 -80 71 -218 0 -101 -3 -123 -18 -138 -9 -10 -17 -21
-17 -26 0 -14 -84 -50 -117 -50 -17 0 -41 8 -53 18 -22 18 -23 24 -24 211 l-1
193 24 19 c29 24 85 20 135 -9z"
                        />
                        <path
                            className="midSide"
                            d="M5770 5402 c-47 -15 -50 -34 -50 -379 l0 -322 -28 -18 c-15 -10 -36
-23 -47 -29 -14 -8 -20 -22 -20 -45 0 -30 5 -37 47 -59 l47 -25 3 -337 c3
-308 5 -339 21 -355 16 -17 44 -18 328 -18 296 0 311 1 325 19 22 30 20 229
-2 247 -12 10 -63 15 -181 19 -217 7 -203 -10 -203 235 l0 183 45 26 c80 48
81 83 0 130 l-45 27 0 87 c-1 48 -1 195 0 328 1 298 6 286 -126 290 -49 2
-100 0 -114 -4z"
                        />
                        <path
                            className="midSide"
                            d="M2410 5380 c-19 -19 -20 -33 -20 -350 l0 -330 -42 -26 c-86 -53 -89
-80 -13 -129 l55 -35 0 -327 c0 -181 4 -333 8 -340 14 -22 63 -33 148 -33 133
0 124 -26 124 370 l0 330 50 31 c83 51 78 89 -19 141 l-31 17 0 335 c0 399 13
366 -142 366 -85 0 -101 -3 -118 -20z"
                        />
                        <path
                            className="midSide"
                            d="M3129 5381 l-24 -19 -5 -336 -5 -335 -48 -31 c-64 -41 -63 -72 5
-115 l47 -30 3 -331 c4 -404 -8 -374 142 -374 151 1 140 -23 146 305 7 365 13
369 85 66 78 -326 83 -345 102 -359 12 -9 45 -12 107 -10 82 3 90 5 108 28 10
14 24 57 32 95 72 357 83 405 97 405 22 0 29 -63 29 -271 0 -275 -7 -263 146
-257 82 3 107 7 121 21 16 16 18 46 20 325 0 169 2 318 2 332 1 18 14 33 47
54 25 16 48 34 50 41 7 17 -14 67 -26 60 -5 -3 -10 -1 -10 4 0 6 -5 11 -10 11
-6 0 -20 9 -32 19 -20 19 -20 29 -22 356 -1 321 -2 337 -20 351 -23 17 -278
20 -320 4 -41 -15 -37 -2 -105 -355 -16 -88 -42 -223 -56 -300 -34 -186 -38
-200 -55 -200 -10 0 -21 24 -33 75 -14 60 -88 427 -113 565 -24 126 -45 201
-60 212 -13 9 -63 13 -170 13 -135 0 -154 -2 -175 -19z"
                        />
                        <path
                            className="midSide"
                            d="M6762 5393 c-44 -8 -46 -29 -47 -375 l0 -328 -28 -11 c-47 -20 -77
-49 -77 -75 0 -19 12 -32 50 -56 l50 -31 1 -221 c1 -328 5 -419 17 -443 21
-38 61 -43 354 -43 320 0 342 4 353 64 11 55 2 193 -13 208 -9 9 -65 14 -197
18 -232 6 -219 -3 -222 160 -2 131 8 186 35 194 10 4 69 8 132 11 85 3 118 9
129 20 13 12 16 39 16 120 0 139 1 138 -155 145 -161 7 -155 -1 -155 189 0
203 -14 191 215 191 136 0 181 3 196 14 17 13 19 27 19 115 0 83 -3 103 -18
118 -16 16 -44 18 -325 19 -169 0 -317 -1 -330 -3z"
                        />
                        <path
                            className="midSide"
                            d="M7902 4869 c-5 -13 -20 -57 -33 -96 l-23 -73 -92 0 c-51 0 -95 -4
-99 -9 -3 -6 28 -35 70 -66 41 -30 75 -59 75 -63 0 -5 -11 -42 -25 -82 -41
-120 -35 -124 67 -50 38 28 71 50 74 50 4 0 38 -23 76 -51 38 -28 76 -48 83
-45 15 5 8 39 -29 144 l-14 39 74 54 c40 30 74 59 74 66 0 9 -29 13 -96 15
l-96 3 -25 80 c-14 44 -31 86 -38 94 -12 12 -15 11 -23 -10z"
                        />
                        <path
                            className="midSide"
                            d="M789 4853 c-6 -15 -20 -56 -30 -90 l-20 -63 -94 0 c-52 0 -96 -4
-100 -9 -3 -5 28 -34 70 -63 41 -29 75 -57 75 -63 0 -5 -12 -47 -27 -92 -14
-46 -23 -86 -19 -90 8 -8 29 4 111 61 l55 40 28 -20 c147 -107 153 -107 117 9
-14 43 -25 83 -25 90 0 7 34 36 75 65 42 29 73 58 70 63 -4 5 -48 9 -100 9
l-93 0 -29 87 c-16 48 -35 89 -41 91 -7 2 -17 -9 -23 -25z"
                        />
                    </MidSide>
                    <BottomSide>
                        <path
                            className="botSide"
                            d="M1045 3434 c-17 -13 -20 -59 -5 -69 5 -3 239 -6 519 -5 l510 0 36
-52 c19 -29 35 -55 35 -59 0 -3 -30 -25 -67 -49 -404 -258 -498 -323 -501
-347 -5 -32 22 -53 56 -43 16 4 144 83 286 174 141 92 263 169 270 172 9 3 26
-12 44 -39 l31 -44 -52 -39 c-109 -81 -322 -249 -329 -259 -21 -29 3 -75 40
-75 5 0 94 65 198 145 104 80 194 145 199 145 6 0 25 -19 44 -42 l34 -41 -64
-61 c-36 -33 -90 -85 -122 -115 -57 -53 -70 -84 -45 -109 29 -29 43 -19 248
167 25 23 47 41 50 41 3 0 23 -18 45 -40 l39 -40 -25 -27 c-13 -16 -53 -60
-89 -98 -36 -39 -117 -126 -180 -195 -63 -68 -157 -169 -207 -224 -51 -54 -93
-107 -93 -117 0 -10 7 -25 16 -33 36 -37 24 -48 473 437 96 103 177 187 181
187 3 0 23 -18 44 -39 26 -26 36 -44 30 -53 -4 -7 -48 -64 -97 -127 -49 -62
-91 -119 -93 -126 -3 -6 4 -22 14 -35 31 -38 59 -21 142 87 41 53 86 110 100
126 l26 29 47 -32 c26 -17 47 -34 47 -36 0 -3 -57 -91 -127 -197 -70 -106
-128 -204 -131 -218 -5 -30 18 -52 49 -47 17 2 57 54 157 205 l135 203 40 -23
c22 -12 42 -27 44 -34 5 -13 -14 -52 -113 -230 -41 -73 -74 -134 -74 -136 0
-2 -27 -51 -60 -108 -33 -57 -60 -113 -60 -124 0 -27 18 -45 47 -45 26 0 37
15 143 210 135 245 150 275 177 328 15 28 33 52 40 52 25 0 95 -41 90 -53 -10
-25 -130 -295 -158 -356 -34 -75 -37 -106 -9 -121 47 -25 56 -13 150 205 27
61 62 140 79 177 l31 68 51 -20 c28 -10 54 -21 56 -24 3 -3 -18 -71 -46 -152
-59 -171 -62 -191 -24 -200 14 -4 33 -2 42 3 9 5 39 76 68 157 28 81 53 150
56 153 3 2 31 -3 62 -12 45 -13 55 -19 51 -33 -3 -9 -39 -150 -80 -312 -41
-162 -86 -338 -100 -390 -29 -106 -32 -140 -14 -158 16 -16 53 -15 66 1 5 6
49 167 96 357 95 376 123 480 130 487 10 10 108 -10 112 -22 3 -7 -6 -84 -21
-171 l-26 -159 22 -17 c12 -10 25 -18 30 -18 23 0 47 41 53 91 4 30 14 101 23
158 l16 104 59 -6 c33 -3 61 -7 63 -9 3 -2 -5 -109 -15 -238 -11 -129 -18
-242 -14 -252 3 -10 17 -21 31 -24 49 -13 58 15 72 208 7 95 15 201 18 236 l6
62 52 0 c39 0 54 -4 59 -16 3 -9 6 -164 6 -345 l0 -329 25 -12 c21 -9 28 -8
45 7 19 17 20 31 20 357 l0 338 58 0 58 0 18 -232 c10 -128 20 -241 22 -250 7
-23 38 -32 64 -18 25 13 25 30 4 298 -9 112 -14 206 -11 208 3 3 30 8 60 11
l54 6 16 -89 c9 -49 22 -122 28 -162 10 -58 17 -77 35 -89 17 -11 27 -12 43
-3 27 14 27 49 -3 220 -17 96 -21 137 -13 142 13 8 107 22 111 17 2 -2 49
-188 106 -414 56 -225 107 -418 112 -427 18 -36 81 -17 80 23 0 21 -86 374
-144 589 -38 144 -58 225 -58 242 0 19 97 56 109 42 8 -10 60 -150 86 -234 23
-71 32 -82 69 -78 47 5 45 41 -12 207 l-50 143 55 24 c31 14 57 24 58 22 1 -2
18 -39 37 -83 127 -295 163 -366 185 -371 30 -8 53 12 52 45 0 14 -42 121 -93
236 -82 185 -91 211 -77 221 23 15 81 37 85 33 3 -2 76 -134 163 -294 l158
-290 35 0 c66 0 57 27 -112 337 -84 155 -154 287 -156 293 -2 9 87 70 93 63 1
-2 23 -34 47 -73 191 -299 217 -335 249 -335 22 0 32 6 38 23 11 27 -1 48
-147 270 -57 87 -101 165 -98 172 8 21 86 70 95 59 4 -5 48 -61 97 -124 49
-63 93 -118 99 -122 22 -16 56 -8 66 16 14 30 11 35 -100 176 -50 63 -91 118
-91 122 0 3 19 23 43 43 l42 37 85 -90 c47 -49 181 -193 299 -320 215 -232
238 -251 269 -220 27 27 12 59 -66 141 -43 45 -103 109 -133 142 -30 33 -84
91 -120 130 -36 38 -90 97 -120 130 -30 33 -74 80 -96 104 l-41 45 25 30 c52
62 60 63 106 19 23 -22 62 -58 87 -80 126 -115 133 -118 164 -84 11 12 15 27
11 40 -3 11 -60 69 -126 128 -65 59 -119 110 -119 113 0 3 18 23 40 45 l39 38
35 -24 c19 -13 107 -79 196 -146 88 -68 165 -123 171 -123 13 0 49 38 49 51 0
18 -57 68 -223 193 -87 66 -160 123 -163 127 -6 10 45 89 57 89 5 0 101 -60
214 -132 350 -226 337 -219 370 -216 26 3 30 8 33 35 3 28 -2 36 -30 53 -18
10 -104 66 -190 122 -87 57 -198 129 -248 161 -49 31 -90 63 -90 70 0 7 13 34
29 59 l30 47 512 1 c281 0 516 3 520 6 12 7 11 45 -1 64 -8 13 -398 15 -3284
15 -2385 0 -3280 -3 -3291 -11z m2320 -134 c207 -158 467 -263 759 -306 212
-31 488 -5 709 67 164 54 367 161 484 255 l42 34 556 -2 557 -3 -80 -120
c-310 -463 -743 -793 -1282 -977 -250 -85 -487 -122 -780 -122 -221 0 -276 6
-505 50 -626 123 -1189 506 -1566 1066 -33 48 -59 92 -59 98 0 7 177 10 550
10 l551 0 64 -50z"
                        />
                        <path
                            className="botSide"
                            d="M2997 3068 c-105 -164 -129 -208 -122 -226 6 -15 9 -14 28 8 12 14
29 37 38 50 l16 25 43 -24 c55 -31 76 -20 131 70 46 77 46 96 -4 133 -74 55
-71 55 -130 -36z m88 14 c36 -26 36 -39 4 -93 -17 -30 -33 -56 -35 -59 -3 -2
-20 4 -38 14 l-34 18 40 64 c41 65 45 69 63 56z"
                        />
                        <path
                            className="botSide"
                            d="M5535 3071 c-8 -13 145 -309 163 -316 31 -12 17 31 -55 170 -75 143
-94 168 -108 146z"
                        />
                        <path
                            className="botSide"
                            d="M3321 2932 c-26 -48 -111 -257 -111 -271 0 -10 13 -30 29 -45 35 -33
84 -38 111 -10 23 24 132 273 124 285 -16 26 -36 -4 -89 -126 -55 -127 -60
-135 -86 -135 -55 0 -54 26 6 166 30 70 55 134 55 141 0 19 -28 16 -39 -5z"
                        />
                        <path
                            className="botSide"
                            d="M5314 2937 c-3 -8 17 -73 45 -146 28 -72 48 -138 45 -146 -9 -22 -53
-31 -68 -14 -7 8 -34 69 -60 136 -48 124 -60 143 -78 125 -13 -13 87 -271 114
-294 31 -27 75 -23 109 11 16 16 29 35 29 43 0 25 -107 292 -119 296 -6 2 -13
-3 -17 -11z"
                        />
                        <path
                            className="botSide"
                            d="M3640 2794 c-6 -14 -10 -28 -10 -32 0 -4 -16 -67 -36 -140 -28 -103
-34 -136 -24 -145 18 -18 33 10 54 97 10 42 21 76 26 76 4 0 11 -35 14 -77 10
-115 15 -133 36 -133 18 0 17 -3 81 237 12 45 19 89 15 98 -12 32 -33 -3 -57
-96 -26 -103 -32 -98 -43 31 -7 81 -17 110 -37 110 -5 0 -14 -12 -19 -26z"
                        />
                        <path
                            className="botSide"
                            d="M4903 2780 c-18 -11 -35 -30 -38 -43 -8 -31 48 -253 70 -277 10 -11
35 -20 63 -22 26 -3 55 -8 64 -12 21 -10 38 22 18 34 -7 4 -9 16 -5 29 3 12
-5 73 -20 139 -22 98 -31 121 -56 145 -35 32 -53 34 -96 7z m82 -42 c3 -7 16
-62 30 -123 23 -102 24 -111 8 -122 -30 -23 -62 -16 -69 15 -3 15 -15 61 -25
104 -20 80 -24 120 -12 131 11 12 63 8 68 -5z"
                        />
                        <path
                            className="botSide"
                            d="M3976 2732 c-7 -12 -36 -264 -36 -313 0 -27 4 -39 14 -39 8 0 17 4
20 8 9 14 38 322 32 338 -6 15 -22 19 -30 6z"
                        />
                        <path
                            className="botSide"
                            d="M4594 2728 c-13 -21 -34 -342 -23 -353 14 -15 30 8 36 54 5 37 9 41
33 41 23 0 29 -6 39 -40 13 -45 24 -55 39 -37 7 8 -4 61 -34 171 -24 87 -47
162 -50 167 -8 13 -32 11 -40 -3z m55 -195 c1 -7 -6 -13 -14 -13 -11 0 -15 12
-14 48 l1 47 13 -35 c7 -19 14 -41 14 -47z"
                        />
                        <path
                            className="botSide"
                            d="M4195 2710 c-10 -16 4 -30 31 -30 l24 0 0 -161 c0 -147 1 -160 18
-157 15 3 17 20 20 161 l3 157 30 0 c24 0 30 4 27 18 -3 14 -16 18 -75 20 -42
2 -74 -1 -78 -8z"
                        />
                        <path
                            className="botSide"
                            d="M1426 2779 c-41 -32 -30 -89 17 -89 30 0 77 39 77 64 0 48 -48 61
-94 25z"
                        />
                        <path
                            className="botSide"
                            d="M7151 2778 c-12 -31 3 -55 44 -75 33 -16 36 -15 55 2 26 24 25 41 -5
70 -32 33 -82 34 -94 3z"
                        />
                        <path
                            className="botSide"
                            d="M2022 2566 c-26 -24 -62 -56 -79 -72 -57 -49 -40 -122 22 -98 27 11
152 121 166 145 5 11 5 27 -1 43 -15 40 -52 34 -108 -18z"
                        />
                        <path
                            className="botSide"
                            d="M6542 2598 c-27 -27 -12 -56 70 -132 80 -75 111 -89 136 -64 27 27
12 56 -69 132 -80 76 -111 90 -137 64z"
                        />
                        <path
                            className="botSide"
                            d="M2375 2178 c-70 -89 -84 -120 -65 -143 13 -16 48 -20 65 -7 26 18
135 171 135 188 0 27 -19 44 -47 44 -17 0 -40 -22 -88 -82z"
                        />
                        <path
                            className="botSide"
                            d="M6159 2236 c-10 -22 -8 -31 14 -63 95 -137 137 -172 173 -143 28 24
15 58 -54 142 -76 93 -112 111 -133 64z"
                        />
                        <path
                            className="botSide"
                            d="M1857 2002 c-41 -43 -32 -92 18 -92 51 0 87 87 46 110 -28 15 -34 13
-64 -18z"
                        />
                        <path
                            className="botSide"
                            d="M6732 2008 c-18 -18 -15 -42 9 -72 16 -21 28 -26 53 -24 26 2 32 8
34 31 7 58 -59 102 -96 65z"
                        />
                        <path
                            className="botSide"
                            d="M3312 1773 c-19 -17 -82 -189 -82 -226 0 -9 11 -22 24 -28 41 -19 60
2 94 103 37 108 40 143 13 158 -25 13 -25 13 -49 -7z"
                        />
                        <path
                            className="botSide"
                            d="M5298 1779 c-26 -15 -22 -45 18 -158 31 -86 40 -102 62 -108 19 -4
30 -1 43 16 17 21 16 25 -18 129 -20 59 -38 110 -42 113 -13 14 -47 18 -63 8z"
                        />
                        <path
                            className="botSide"
                            d="M2667 1643 c-39 -45 -29 -103 18 -103 28 0 65 43 65 74 0 45 -52 62
-83 29z"
                        />
                        <path
                            className="botSide"
                            d="M3803 1648 c-19 -23 -49 -227 -37 -246 14 -22 57 -27 72 -9 19 22 48
225 36 245 -14 21 -57 27 -71 10z"
                        />
                        <path
                            className="botSide"
                            d="M4803 1653 c-7 -2 -13 -21 -13 -41 0 -44 26 -207 35 -222 10 -17 63
-12 74 8 12 24 -22 241 -40 253 -15 9 -37 10 -56 2z"
                        />
                        <path
                            className="botSide"
                            d="M5918 1636 c-16 -37 17 -90 60 -94 26 -3 32 1 38 22 18 72 -68 136
-98 72z"
                        />
                        <path
                            className="botSide"
                            d="M4297 1233 c-4 -3 -7 -28 -7 -54 0 -48 9 -59 50 -59 35 0 56 80 28
108 -13 13 -60 16 -71 5z"
                        />
                        <path
                            className="botSide"
                            d="M3422 1172 c-23 -15 -33 -73 -17 -99 25 -38 66 -24 84 28 18 53 -24
98 -67 71z"
                        />
                        <path
                            className="botSide"
                            d="M5188 1169 c-21 -12 -23 -47 -6 -83 26 -58 95 -32 84 32 -9 57 -37
75 -78 51z"
                        />
                    </BottomSide>
                </g>
            </svg>
        </>
    );
};
