import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46049Page } from './s46049.page';

describe('S46049Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46049Page;
  let fixture: ComponentFixture<S46049Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46049Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46049Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
