import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61018Page } from './s61018.page';

describe('S61018Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61018Page;
  let fixture: ComponentFixture<S61018Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61018Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61018Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
