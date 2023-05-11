import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S108006Page } from './s108006.page';

describe('S108006Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S108006Page;
  let fixture: ComponentFixture<S108006Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S108006Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S108006Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
