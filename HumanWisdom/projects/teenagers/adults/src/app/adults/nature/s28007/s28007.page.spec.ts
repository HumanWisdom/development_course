import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S28007Page } from './s28007.page';

describe('S28007Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S28007Page;
  let fixture: ComponentFixture<S28007Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S28007Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S28007Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
