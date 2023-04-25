import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S107007Page } from './s107007.page';

describe('S107007Page', () => {
  let component: S107007Page;
  let fixture: ComponentFixture<S107007Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S107007Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S107007Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
