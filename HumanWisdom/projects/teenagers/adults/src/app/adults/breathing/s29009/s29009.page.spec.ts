import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S29009Page } from './s29009.page';

describe('S29009Page', () => {
  let component: S29009Page;
  let fixture: ComponentFixture<S29009Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S29009Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S29009Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
