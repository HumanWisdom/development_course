import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62018Page } from './s62018.page';

describe('S62018Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62018Page;
  let fixture: ComponentFixture<S62018Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62018Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62018Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
