import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141049Page } from './s141049.page';

describe('S141049Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141049Page;
  let fixture: ComponentFixture<S141049Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141049Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141049Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
