import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JournalS01Page } from './journal-s01.page';

describe('JournalS01Page', () => {
  let component: JournalS01Page;
  let fixture: ComponentFixture<JournalS01Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalS01Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JournalS01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
