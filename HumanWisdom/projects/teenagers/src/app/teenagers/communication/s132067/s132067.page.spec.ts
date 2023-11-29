import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132067Page } from './s132067.page';

describe('S132067Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132067Page;
  let fixture: ComponentFixture<S132067Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132067Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132067Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
