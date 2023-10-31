import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46059Page } from './s46059.page';

describe('S46059Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46059Page;
  let fixture: ComponentFixture<S46059Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46059Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46059Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
