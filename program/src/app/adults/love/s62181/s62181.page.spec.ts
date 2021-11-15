import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62181Page } from './s62181.page';

describe('S62181Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62181Page;
  let fixture: ComponentFixture<S62181Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62181Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62181Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
