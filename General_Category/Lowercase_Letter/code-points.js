module.exports=JSON.parse(require('zlib').gunzipSync(Buffer([31,139,8,0,0,0,0,0,0,3,45,153,201,149,236,58,14,68,29,122,139,162,48,219,242,79,251,239,70,199,144,139,132,170,68,6,68,92,82,4,146,249,223,205,191,219,127,119,255,222,223,31,62,15,159,15,159,192,39,241,41,124,26,159,193,103,241,65,191,135,126,15,253,30,250,61,244,123,232,247,208,239,161,223,67,191,135,126,15,253,62,244,251,208,239,67,191,125,255,190,47,240,73,124,10,159,198,103,240,89,124,238,223,23,127,248,160,79,124,248,160,95,160,95,160,95,160,95,160,95,160,95,160,95,162,95,162,95,162,95,162,95,162,95,162,95,162,95,162,79,162,79,161,79,161,79,161,79,161,79,161,79,161,79,193,79,161,189,209,214,184,223,184,215,184,215,184,55,184,55,184,55,184,55,184,55,184,199,49,47,238,45,238,45,238,45,238,29,238,29,238,29,238,129,220,7,110,1,102,1,94,1,86,1,78,1,70,1,62,1,62,1,54,1,46,1,38,1,30,1,22,1,6,129,248,227,227,61,244,69,220,129,152,3,241,6,98,13,196,25,136,49,16,95,32,182,72,220,67,92,129,152,2,241,4,98,9,196,18,136,37,16,75,32,150,64,44,129,88,2,177,4,98,9,196,18,136,37,6,207,88,60,119,241,92,196,18,139,103,35,150,64,44,113,184,119,24,7,226,72,204,121,98,252,137,177,39,230,55,49,254,196,216,19,243,153,152,203,196,60,38,198,157,24,119,98,222,18,227,78,204,85,98,126,18,115,147,24,111,98,78,18,227,77,204,69,98,204,9,238,137,113,102,195,95,163,173,241,127,163,173,209,127,112,111,112,111,112,111,112,15,204,19,204,19,204,19,227,76,48,79,140,51,49,206,4,243,4,243,4,243,196,120,19,204,11,204,11,227,45,240,46,140,185,48,222,194,90,44,172,195,194,152,11,99,46,140,185,176,230,10,235,173,48,230,194,152,11,172,11,172,11,172,11,172,11,172,11,99,47,176,46,140,189,48,238,2,235,2,235,2,235,2,235,66,12,5,214,5,214,5,214,133,56,10,188,11,177,20,152,23,226,41,112,47,196,83,96,94,136,167,192,189,16,71,33,142,66,28,133,56,10,113,20,152,23,98,169,131,15,196,83,136,167,192,191,240,10,22,226,106,188,131,141,216,26,243,209,88,83,141,119,176,17,103,227,29,108,196,218,120,7,27,241,54,230,168,17,115,99,141,53,226,110,204,85,35,246,198,90,107,196,223,88,111,13,6,141,53,215,224,208,88,119,13,22,141,57,108,240,104,204,99,131,73,99,13,54,184,52,222,191,6,155,198,156,54,248,52,222,191,6,163,198,252,54,56,53,230,184,193,170,241,254,53,120,53,230,186,193,172,241,254,53,184,53,230,188,193,174,241,14,54,248,53,222,193,6,195,198,59,216,224,216,88,11,13,150,93,232,7,158,93,232,7,166,13,166,141,181,209,224,218,224,218,224,218,224,218,224,218,224,218,224,218,88,43,141,53,221,224,219,88,215,141,53,211,224,220,224,220,88,55,13,214,141,181,211,88,231,141,245,211,88,235,13,246,141,181,222,224,223,139,126,152,131,69,219,226,254,242,111,204,197,98,46,22,115,113,96,120,136,235,16,215,37,255,198,61,196,117,136,235,16,215,33,174,67,92,135,184,14,113,29,226,58,196,117,136,235,16,215,33,174,67,92,135,184,14,113,29,226,58,172,249,67,108,135,216,14,177,29,98,59,196,118,136,237,16,219,33,182,67,108,135,216,14,177,29,98,59,196,118,136,237,16,215,13,119,101,220,71,44,135,49,31,226,184,229,61,104,48,246,227,184,177,126,142,187,183,247,110,110,220,218,181,181,101,107,191,214,134,205,29,251,239,105,107,103,23,110,216,127,220,169,255,184,69,255,113,143,254,27,110,248,195,134,225,150,63,116,48,218,244,233,101,232,101,216,121,217,121,233,101,169,88,42,150,138,165,98,169,88,229,9,42,150,138,163,226,168,56,42,142,138,163,226,168,56,42,142,138,83,106,81,110,97,114,97,48,74,67,202,67,74,68,202,68,74,69,202,69,74,70,206,70,78,71,84,40,33,41,35,41,37,41,39,41,41,41,43,41,45,49,104,37,165,247,177,223,199,46,31,91,63,54,4,27,130,13,193,134,96,67,176,33,217,144,202,117,108,72,54,36,27,138,13,197,134,150,81,26,100,107,179,117,216,74,176,143,76,31,113,62,146,100,58,132,97,3,209,189,85,214,100,3,89,61,98,122,36,244,8,231,157,114,41,19,41,105,124,4,241,145,193,199,240,63,70,254,49,232,143,241,126,140,242,83,230,101,218,101,190,125,76,182,143,153,246,49,205,62,230,217,199,36,251,152,97,31,211,235,99,110,125,76,172,143,89,245,49,165,194,176,129,81,50,155,62,166,210,199,60,250,152,72,31,51,233,99,42,125,204,165,143,201,244,49,155,62,166,211,199,124,250,152,80,31,51,234,99,74,125,204,169,143,73,245,49,171,62,166,213,199,188,250,152,88,31,51,235,99,106,125,204,173,143,201,245,49,187,62,166,215,199,252,250,152,96,31,51,236,99,138,125,204,177,48,108,96,228,193,73,14,206,111,112,126,131,243,27,156,223,224,252,198,200,44,13,187,112,41,7,199,194,204,248,152,26,31,115,35,12,21,92,202,76,147,48,84,112,124,193,165,28,28,36,243,38,12,21,92,202,193,225,50,143,62,38,82,24,42,56,240,228,82,78,142,158,217,21,38,104,146,166,104,154,102,104,150,134,10,46,101,166,94,24,42,24,27,179,48,76,253,27,230,95,24,253,213,52,67,179,52,7,131,169,133,121,52,31,77,208,80,17,84,4,21,65,69,80,17,84,36,21,73,69,82,145,84,36,21,73,69,82,145,84,36,21,73,69,81,81,84,20,21,69,69,81,81,84,20,21,69,69,81,81,84,52,21,77,69,83,209,84,52,21,77,69,83,129,69,51,204,203,48,31,77,208,36,77,209,52,141,186,44,13,156,22,7,206,172,13,67,5,7,206,228,13,195,206,28,115,113,204,76,228,83,28,51,211,57,12,59,115,204,197,49,51,181,195,80,193,49,23,199,204,52,63,197,49,51,217,195,80,193,49,51,231,15,147,254,48,235,79,105,204,77,69,83,49,84,12,21,67,197,80,49,84,12,21,67,197,80,129,245,55,76,81,195,252,52,76,78,195,204,4,3,47,125,108,56,54,28,27,142,13,88,72,51,88,67,48,65,83,52,67,195,134,199,134,199,6,46,144,121,108,120,108,248,216,240,177,129,235,101,184,84,134,171,100,200,121,136,120,72,119,8,118,200,116,136,115,72,114,72,114,8,113,200,111,136,110,72,109,8,108,200,106,136,105,72,104,8,103,200,101,136,100,72,99,8,98,200,96,24,254,48,242,25,54,48,242,97,228,195,200,135,145,15,35,31,70,62,140,124,24,249,48,242,97,228,203,200,151,145,47,35,95,70,190,140,124,25,249,50,242,101,228,203,200,151,145,47,35,95,70,190,140,124,25,249,50,242,229,251,177,12,127,185,204,150,12,150,203,108,9,98,185,204,150,52,150,52,150,52,150,52,150,52,150,52,150,52,150,52,150,52,150,52,150,52,150,52,150,52,150,52,150,52,150,52,150,52,150,52,150,52,150,52,150,52,150,52,88,142,12,235,17,24,54,144,198,146,6,107,147,97,97,2,195,6,210,88,210,56,210,56,210,56,210,56,210,56,210,56,210,56,210,56,210,56,210,56,210,56,210,56,210,56,210,56,210,56,210,56,130,56,50,56,134,127,12,255,24,254,241,45,59,50,96,73,52,172,137,134,69,209,176,42,26,150,61,195,186,103,88,248,12,43,159,97,233,51,172,125,134,69,205,176,170,25,150,53,195,186,102,88,216,12,43,155,97,105,3,67,197,242,175,213,95,212,50,242,91,106,25,254,29,181,172,207,254,176,129,46,11,27,152,143,38,104,146,166,96,144,217,97,134,102,105,14,230,163,226,163,226,163,226,163,34,248,87,232,47,106,131,218,160,54,168,13,106,131,218,228,95,201,191,138,94,138,94,138,218,162,182,168,45,106,139,218,162,182,168,40,42,154,138,166,162,217,175,217,175,217,175,217,175,217,175,217,111,216,111,216,111,249,215,234,47,62,131,117,41,107,169,101,45,181,172,165,150,181,212,178,70,90,214,72,203,26,105,89,35,45,107,164,101,141,180,172,145,150,53,210,178,246,89,214,62,203,218,103,89,251,44,107,159,101,217,179,44,123,22,153,25,38,168,13,106,201,229,17,9,139,157,125,201,191,82,127,177,31,150,60,94,45,118,38,136,199,0,95,235,47,202,154,15,98,168,172,120,96,168,96,168,111,248,180,225,211,24,224,99,108,172,115,150,41,97,153,3,150,57,96,185,233,47,191,208,109,49,24,126,149,131,89,26,104,139,99,230,87,184,45,78,40,191,200,193,224,25,197,180,253,194,7,15,42,244,66,149,158,10,128,23,170,245,84,7,188,80,181,167,114,224,241,139,247,115,85,240,248,5,252,185,56,120,252,34,254,92,35,60,126,33,127,46,21,30,191,152,211,74,27,210,254,10,67,105,93,31,134,180,46,19,67,90,87,139,33,173,138,198,72,105,85,59,70,74,171,18,50,82,90,85,146,145,210,170,160,140,148,86,117,101,148,180,42,47,163,164,45,215,165,210,150,180,37,109,73,91,210,182,250,171,10,141,86,107,235,254,200,219,200,143,170,80,85,65,46,131,92,2,185,6,114,17,228,42,200,101,144,235,32,215,59,174,117,92,231,184,198,113,125,227,218,198,117,141,107,26,215,51,174,101,92,199,168,134,161,85,171,230,37,53,35,169,185,72,205,66,138,127,138,124,134,107,110,181,138,115,138,112,186,32,119,69,238,146,220,53,185,139,114,209,75,113,203,114,193,174,86,81,98,77,2,43,74,169,130,61,197,42,85,178,167,106,246,84,209,158,170,218,115,92,237,171,85,196,82,149,123,138,85,138,82,138,79,170,122,79,149,239,201,2,241,149,190,201,212,159,255,102,159,210,58,44,69,93,90,135,165,216,75,235,176,68,160,180,14,235,115,255,149,213,247,12,173,195,10,127,221,144,86,100,74,235,176,196,167,180,14,75,148,74,235,176,196,170,180,14,75,196,74,235,176,196,173,180,14,75,244,74,235,176,196,176,180,14,203,223,111,180,14,203,95,115,180,14,75,84,75,235,176,196,182,180,14,75,132,75,132,89,41,97,70,251,201,134,172,239,140,44,15,148,88,47,209,170,117,212,58,106,29,181,174,90,87,173,171,214,85,235,170,245,212,122,106,61,181,158,90,143,173,60,64,161,13,89,182,242,200,131,118,100,213,39,212,39,212,39,212,26,106,13,181,166,90,83,173,169,214,84,107,170,181,216,58,26,207,104,60,163,241,140,198,51,26,207,104,60,163,241,32,95,201,62,217,144,45,217,145,85,159,167,214,167,214,167,214,167,86,29,190,173,142,223,88,214,208,170,85,177,172,98,89,197,178,138,101,21,203,42,150,85,44,171,88,86,177,172,98,89,197,178,138,101,21,11,43,26,90,181,150,90,75,173,154,193,213,12,174,102,112,121,128,247,173,230,113,121,144,247,173,102,115,71,49,106,78,151,7,123,176,41,171,254,154,211,213,156,174,230,116,53,167,43,134,60,136,161,85,255,243,29,246,63,113,59,113,59,113,59,113,59,113,59,113,59,113,59,113,59,113,59,113,59,113,99,253,131,47,70,60,220,196,38,151,178,37,171,99,75,50,132,93,89,30,104,178,72,164,125,178,82,145,106,176,80,164,149,214,71,158,33,109,72,27,210,166,180,41,109,74,155,210,166,180,41,109,74,155,210,166,180,41,109,73,91,210,150,180,37,109,73,91,210,150,180,37,109,73,91,210,182,180,45,109,75,219,210,182,180,45,109,75,59,182,60,166,251,120,16,199,151,77,118,101,121,188,135,23,70,86,71,124,60,152,75,126,129,167,85,127,107,71,253,121,228,86,204,98,180,45,59,178,43,171,86,29,3,134,14,2,195,71,129,58,12,12,29,7,134,14,4,67,71,130,161,67,193,208,177,32,15,182,97,91,218,150,182,165,109,105,91,218,150,182,165,109,105,91,218,150,150,71,134,173,195,212,214,113,106,235,64,181,117,164,218,58,84,109,29,171,182,14,86,91,71,171,173,195,213,214,241,106,235,128,181,117,196,218,58,100,109,29,179,182,14,90,91,71,173,173,195,214,214,113,107,235,192,181,117,228,218,58,116,109,29,187,182,14,94,91,71,175,173,195,215,214,241,107,235,0,182,117,4,219,58,132,109,29,195,182,14,98,91,71,177,173,195,216,214,113,108,235,64,182,117,36,219,58,148,109,29,203,182,14,102,155,187,214,60,190,119,180,33,155,178,37,219,178,35,187,178,234,143,236,79,251,100,165,93,105,87,218,149,118,165,93,105,87,218,149,246,164,61,105,79,218,147,246,164,61,105,79,218,147,246,164,229,215,152,199,247,154,246,201,126,178,58,241,90,37,179,91,101,179,91,165,179,91,229,179,91,37,180,91,101,180,91,165,180,91,229,180,91,37,181,219,180,151,180,151,180,151,180,151,180,151,180,151,180,151,178,151,178,151,178,151,178,151,178,151,178,151,178,151,178,151,178,151,178,151,117,219,186,109,221,230,211,60,98,210,197,79,56,63,225,236,218,39,124,164,164,139,229,103,185,138,171,59,213,16,119,42,178,238,84,75,220,15,214,233,84,244,78,69,23,46,237,139,15,12,117,58,122,247,103,47,207,94,158,189,24,228,25,228,25,228,25,228,25,228,25,228,25,228,25,228,25,228,25,228,25,228,25,228,25,228,25,228,25,228,25,228,25,228,25,228,25,228,25,228,25,228,25,36,15,205,117,177,151,182,151,182,23,131,60,131,60,131,188,251,181,217,245,239,176,212,4,207,167,166,252,14,169,203,243,229,243,37,124,41,95,218,151,241,101,125,177,252,89,254,44,127,150,63,203,249,213,131,23,123,73,183,165,219,210,109,249,107,243,19,210,79,72,63,33,253,132,242,19,202,79,40,123,41,123,41,123,41,123,41,123,41,123,41,123,41,123,105,123,105,123,105,123,105,123,105,123,105,123,105,123,105,123,57,183,157,219,206,109,247,107,243,19,126,199,207,6,249,12,242,25,228,51,72,29,208,243,82,190,180,47,227,203,250,98,47,230,249,204,243,153,231,51,207,103,158,207,60,117,112,207,139,189,60,123,241,207,202,207,60,159,121,62,243,124,230,249,204,243,153,231,51,207,103,158,207,60,159,121,62,243,124,230,249,204,243,153,231,51,207,103,158,207,60,159,121,62,243,124,230,249,204,243,153,231,107,123,105,123,25,123,25,123,49,207,223,113,254,103,158,191,115,253,207,60,127,7,252,159,121,254,78,250,63,243,252,29,249,127,230,233,179,255,191,207,60,253,35,0,46,246,98,158,159,121,250,103,1,92,236,197,60,253,51,1,46,246,242,217,203,103,47,159,189,124,246,98,158,254,9,224,239,51,79,255,22,240,247,153,167,127,20,248,251,204,211,191,14,252,125,230,233,159,9,254,62,243,244,239,5,127,159,121,250,135,3,92,236,197,60,63,243,244,79,9,184,216,139,121,126,230,233,31,23,112,177,151,177,151,177,23,253,220,240,23,230,25,230,25,230,25,127,191,182,246,101,124,89,95,244,132,48,207,48,207,48,207,48,207,48,207,48,207,48,207,48,207,48,207,48,207,48,207,48,207,48,207,48,79,29,58,240,98,47,159,189,124,246,98,158,97,158,97,158,81,191,54,63,193,60,195,60,195,60,195,60,195,60,195,60,195,60,195,60,195,60,195,60,195,60,195,60,195,60,195,60,195,60,195,60,227,199,115,236,101,236,101,236,69,63,232,252,165,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,230,103,47,159,189,132,189,132,189,152,103,154,103,154,103,154,103,154,103,154,103,154,103,154,103,154,103,154,103,154,103,154,103,154,103,154,103,154,103,154,103,154,103,154,103,154,103,154,103,154,103,254,120,174,189,172,189,172,189,172,189,172,189,232,183,51,228,140,244,229,247,95,251,50,190,172,47,242,89,38,88,38,88,38,88,38,88,38,88,38,88,38,88,38,88,38,88,38,88,38,88,38,168,99,8,94,236,37,236,37,236,37,236,37,236,37,236,37,45,79,203,157,48,203,9,179,156,48,203,9,179,140,174,140,174,140,174,230,215,102,215,70,87,70,87,70,87,70,87,70,87,70,87,70,87,70,87,63,116,107,47,107,47,107,47,107,47,103,47,103,47,103,47,103,47,78,152,229,132,89,78,152,229,157,189,188,179,183,119,246,246,206,222,222,137,218,59,81,155,96,155,96,155,96,199,175,45,125,41,95,218,151,241,101,125,241,19,12,178,13,178,13,178,13,178,13,178,13,178,157,41,219,153,178,157,41,219,153,178,189,179,183,119,246,246,206,222,222,217,219,59,81,123,11,106,111,65,237,87,166,253,202,180,95,153,246,43,211,38,216,38,216,38,216,38,216,38,216,38,216,38,216,38,216,38,216,46,57,218,32,219,32,199,32,199,32,199,32,199,32,199,91,250,252,126,12,247,22,52,222,130,198,91,208,120,11,26,111,65,227,45,104,188,5,141,223,156,241,155,51,126,115,198,111,206,248,205,25,191,57,99,130,99,130,99,130,99,130,99,130,99,130,99,130,99,130,99,130,227,189,124,12,114,12,114,12,114,12,114,12,114,12,114,188,247,140,247,158,241,222,51,222,123,198,123,207,120,239,25,239,61,227,189,103,188,247,140,223,156,241,155,51,126,115,198,111,206,248,205,25,191,57,51,247,191,255,3,186,58,171,58,253,39,0,0])))