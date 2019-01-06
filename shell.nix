with import (fetchTarball https://github.com/nixos/nixpkgs/tarball/6a3f5bcb061e1822f50e299f5616a0731636e4e7) { };

stdenv.mkDerivation {
    name = "dev-shell";
    src = null;
    buildInputs = [ nodejs-10_x ];
}
