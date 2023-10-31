import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48007Page } from './s48007.page';

describe('S48007Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48007Page;
  let fixture: ComponentFixture<S48007Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48007Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48007Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
