import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S107010Page } from './s107010.page';

describe('S107010Page', () => {
  let component: S107010Page;
  let fixture: ComponentFixture<S107010Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S107010Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S107010Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
