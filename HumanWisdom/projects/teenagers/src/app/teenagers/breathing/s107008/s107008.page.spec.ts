import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S107008Page } from './s107008.page';

describe('S107008Page', () => {
  let component: S107008Page;
  let fixture: ComponentFixture<S107008Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S107008Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S107008Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
