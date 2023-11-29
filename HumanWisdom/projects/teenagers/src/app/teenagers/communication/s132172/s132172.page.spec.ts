import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132172Page } from './s132172.page';

describe('S132172Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132172Page;
  let fixture: ComponentFixture<S132172Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132172Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132172Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
