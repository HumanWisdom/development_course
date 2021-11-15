import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62051Page } from './s62051.page';

describe('S62051Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62051Page;
  let fixture: ComponentFixture<S62051Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62051Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62051Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
