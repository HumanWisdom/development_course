import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132100Page } from './s132100.page';

describe('S132100Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132100Page;
  let fixture: ComponentFixture<S132100Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132100Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132100Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
