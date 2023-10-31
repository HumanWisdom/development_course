import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46058Page } from './s46058.page';

describe('S46058Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46058Page;
  let fixture: ComponentFixture<S46058Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46058Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46058Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
