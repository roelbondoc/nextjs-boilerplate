import { NextRequest, NextResponse } from 'next/server';
import '../../../honeybadger.server.config';
import Honeybadger from '@honeybadger-io/js';

export async function GET(request: NextRequest) {
  try {
    throw new Error('This is a test server-side error for Honeybadger');
  } catch (error) {
    Honeybadger.notify(error as Error);
    return NextResponse.json(
      { error: 'Server error triggered for testing' },
      { status: 500 }
    );
  }
}
