import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116085Page } from './s116085.page';

describe('S116085Page', () => {
      
    let component:  S116085Page;
  let fixture: ComponentFixture<S116085Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116085Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116085Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
