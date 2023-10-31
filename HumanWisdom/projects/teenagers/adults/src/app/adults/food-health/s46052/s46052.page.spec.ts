import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46052Page } from './s46052.page';

describe('S46052Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46052Page;
  let fixture: ComponentFixture<S46052Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46052Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46052Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
