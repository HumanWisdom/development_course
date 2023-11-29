import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132068Page } from './s132068.page';

describe('S132068Page', () => {
  // let  canActivate:[ActiveGuard],            
    let component:  S132068Page;
  let fixture: ComponentFixture<S132068Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132068Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132068Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
