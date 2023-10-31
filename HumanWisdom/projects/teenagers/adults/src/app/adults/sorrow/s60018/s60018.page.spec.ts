import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60018Page } from './s60018.page';

describe('S60018Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60018Page;
  let fixture: ComponentFixture<S60018Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60018Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60018Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
