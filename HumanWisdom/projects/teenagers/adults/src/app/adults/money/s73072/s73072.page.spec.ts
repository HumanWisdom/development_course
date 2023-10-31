import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73072Page } from './s73072.page';

describe('S73072Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73072Page;
  let fixture: ComponentFixture<S73072Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73072Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73072Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
