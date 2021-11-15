import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48010Page } from './s48010.page';

describe('S48010Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48010Page;
  let fixture: ComponentFixture<S48010Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48010Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48010Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
