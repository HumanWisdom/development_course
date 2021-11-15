import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57007Page } from './s57007.page';

describe('S57007Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57007Page;
  let fixture: ComponentFixture<S57007Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57007Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57007Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
