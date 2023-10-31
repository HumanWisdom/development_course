import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45007Page } from './s45007.page';

describe('S45007Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45007Page;
  let fixture: ComponentFixture<S45007Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45007Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45007Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
