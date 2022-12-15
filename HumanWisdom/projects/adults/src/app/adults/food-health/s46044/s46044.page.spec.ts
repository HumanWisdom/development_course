import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46044Page } from './s46044.page';

describe('S46044Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46044Page;
  let fixture: ComponentFixture<S46044Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46044Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46044Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
