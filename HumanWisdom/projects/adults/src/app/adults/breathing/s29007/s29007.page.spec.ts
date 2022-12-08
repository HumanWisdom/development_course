import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S29007Page } from './s29007.page';

describe('S29007Page', () => {
  let component: S29007Page;
  let fixture: ComponentFixture<S29007Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S29007Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S29007Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
