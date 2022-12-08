import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18007Page } from './s18007.page';

describe('S18007Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18007Page;
  let fixture: ComponentFixture<S18007Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18007Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18007Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
