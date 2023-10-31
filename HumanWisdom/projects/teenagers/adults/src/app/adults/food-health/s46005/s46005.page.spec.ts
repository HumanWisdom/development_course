import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46005Page } from './s46005.page';

describe('S46005Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46005Page;
  let fixture: ComponentFixture<S46005Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46005Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46005Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
